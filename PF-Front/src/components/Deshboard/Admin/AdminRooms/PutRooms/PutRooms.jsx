import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Snackbar,
    DialogContentText,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const PutRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [editingRoom, setEditingRoom] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editRoomName, setEditRoomName] = useState("");
    const [editRoomNumber, setEditRoomNumber] = useState("");
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [deleteRoomNumber, setDeleteRoomNumber] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get("/rooms");
            setRooms(response.data.filtered);
        } catch (error) {
            console.log("Error fetching rooms:", error);
        }
    };

    const handleDelete = async (num) => {
        setDeleteRoomNumber(num);
        setDeleteConfirmationOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`/rooms/?room_number=${deleteRoomNumber}`);
            console.log(
                `room ${deleteRoomNumber} successfully deleted from database`
            );
            setDeleteSuccess(true);
            setSnackbarOpen(true);
            fetchRooms();
        } catch (error) {
            console.log(`Error deleting room ${deleteRoomNumber}:`, error);
            setDeleteSuccess(false);
            setSnackbarOpen(true);
        }
        setDeleteConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setDeleteRoomNumber("");
        setDeleteConfirmationOpen(false);
    };

    const handleEdit = (room) => {
        setEditingRoom(room);
        setEditRoomName(room.name);
        setEditRoomNumber(room.room_number);
        setEditModalOpen(true);
    };

    const handleSaveEdit = async () => {
        try {
            await axios.put(`/rooms/${editingRoom.id}`, {
                name: editRoomName,
                roomNumber: editRoomNumber,
            });
            fetchRooms();
            setEditModalOpen(false);
        } catch (error) {
            console.log("Error editing room:", error);
        }
    };

    const handleCancelEdit = () => {
        setEditingRoom(null);
        setEditRoomName("");
        setEditRoomNumber("");
        setEditModalOpen(false);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box>
            <List>
                {rooms.map((room) => (
                    <ListItem key={room.id}>
                        <ListItemText
                            primary={`Room Number: ${room.room_number}`}
                            secondary={`Name: ${room.name}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => handleEdit(room)}>
                                <Edit />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDelete(room.room_number)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            <Dialog
                open={editModalOpen}
                onClose={handleCancelEdit}>
                <DialogTitle>Edit Room</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Room Name"
                        value={editRoomName}
                        onChange={(e) => setEditRoomName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Room Number"
                        value={editRoomNumber}
                        onChange={(e) => setEditRoomNumber(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                    <Button
                        onClick={handleSaveEdit}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={deleteConfirmationOpen}
                onClose={cancelDelete}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete Room Number:{" "}
                        {deleteRoomNumber}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={cancelDelete}
                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={confirmDelete}
                        color="primary"
                        variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={
                    deleteSuccess
                        ? "Room deleted successfully!"
                        : "Error deleting room."
                }
            />
        </Box>
    );
};

export default PutRooms;

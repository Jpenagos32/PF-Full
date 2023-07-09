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
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const PutRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [editingRoom, setEditingRoom] = useState(null);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editRoomName, setEditRoomName] = useState("");
    const [editRoomNumber, setEditRoomNumber] = useState("");

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

    const handleDelete = async (roomId) => {
        try {
            await axios.delete(`/rooms/${roomId}`);
            fetchRooms();
        } catch (error) {
            console.log("Error deleting room:", error);
        }
    };

    const handleEdit = (room) => {
        setEditingRoom(room);
        setEditRoomName(room.name);
        setEditRoomNumber(room.roomNumber);
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
                                onClick={() => handleDelete(room.id)}>
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
        </Box>
    );
};

export default PutRooms;

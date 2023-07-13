import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControlLabel,
    Switch,
    Typography,
    Snackbar,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const DeleteRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        filterRooms();
    }, [rooms, searchQuery, sortAsc]);

    const fetchRooms = async () => {
        try {
            const response = await axios.get("/rooms/admin");
            setRooms(response.data.adminsRooms);
        } catch (error) {
            console.log("Error fetching rooms:", error);
        }
    };

    const handleDelete = async (roomNumber) => {
        setConfirmationOpen(true);
        setSelectedRoomNumber(roomNumber);
    };

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    };

    const handleConfirmationConfirm = async () => {
        setConfirmationOpen(false);
        const roomNumberToDelete = selectedRoomNumber;

        try {
            await axios.delete(`/rooms?room_number=${roomNumberToDelete}`);
            fetchRooms();
            showSnackbar("Room deleted successfully");
            console.log("Room deleted successfully");
        } catch (error) {
            console.log("Error deleting room:", error);
            showSnackbar("Error deleting room");
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filterRooms = () => {
        const filtered = rooms.filter((room) => {
            return (
                room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                room.room_number.toString().includes(searchQuery)
            );
        });

        const sorted = filtered.sort((a, b) => {
            if (sortAsc) {
                return a.room_number - b.room_number;
            } else {
                return b.room_number - a.room_number;
            }
        });

        setFilteredRooms(sorted);
    };

    const handleSortChange = () => {
        setSortAsc(!sortAsc);
    };

    const showSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box>
            <TextField
                label="Search"
                value={searchQuery}
                onChange={handleSearch}
                fullWidth
                margin="normal"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={sortAsc}
                        onChange={handleSortChange}
                        color="primary"
                    />
                }
                labelPlacement="end"
                label={
                    sortAsc ? (
                        <span>Ascendent order</span>
                    ) : (
                        <span>Descendent order</span>
                    )
                }
            />
            <List>
                {filteredRooms.map((room) => (
                    <ListItem key={room.id}>
                        <IconButton
                            edge="start"
                            aria-label="delete"
                            onClick={() => handleDelete(room.room_number)}>
                            <Delete />
                        </IconButton>
                        <ListItemText
                            primary={`Room Number: ${room.room_number}`}
                            secondary={`Name: ${room.name}`}></ListItemText>
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{ color: room.available ? "green" : "red" }}>
                            {room.available ? "Available" : "Not Available"}
                        </Typography>
                    </ListItem>
                ))}
            </List>

            <Dialog
                open={confirmationOpen}
                onClose={handleConfirmationClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to DELETE this room?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose}>No</Button>
                    <Button
                        onClick={handleConfirmationConfirm}
                        autoFocus>
                        Yes, Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Box>
    );
};

export default DeleteRooms;

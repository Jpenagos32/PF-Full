import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Pagination, Snackbar, Switch, Alert } from '@mui/material';
import dayjs from "dayjs";
import { differenceInDays, parseISO } from 'date-fns';


export default function UpComingsBookings() {

    const [hostData, setHostData] = React.useState({ hosts: [] })//hostData
    const [currentPage, setCurrentPage] = React.useState(1);
    const [disabledRooms, setDisabledRooms] = React.useState([]);//copia anterior de rooms cuando se va cambiando a available mantener el estado true
    const [filteredRooms, setfilteredRooms] = React.useState([]);//roomsdata
    const [roomsData, setRoomData] = React.useState([])
    const [openAlertSeteada, setOpenAlertSeteada] = React.useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = React.useState(false);
    const today = dayjs().toDate();

    const rowsPerPage = 4;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const roomNumbersRooms = roomsData.map(room => room.room_number);
    const roomNumbersHosts = hostData.hosts.flatMap(host => host.reservations.map(reservation => reservation.room_number));

   
    const reservationData = hostData.hosts.flatMap((host) => host.reservations);
    const filteredReservations = reservationData.filter((reservation) => {
      const checkOutDate = parseISO(reservation.room_check_in);
      const daysDifference = differenceInDays(checkOutDate, today);
      return daysDifference >= 0 && daysDifference <= 1;
    });
    const getReservation = async () => {
        try {
            const response = await axios.get(`/hosts`)
            const hostsData = response.data
            setHostData(hostsData);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }

    };
    const findMatchRooms = async () => {
        try {
            const response = await axios.get(`/rooms`);
            const roomsData = response.data.filtered;
            setRoomData(roomsData);
        } catch (error) {
            console.log("Error fetching rooms data:", error);
        }
    }

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleSetAvailable = async (roomNumber) => {
        if (disabledRooms.includes(roomNumber)) {
            // La habitación ya está seteada
            // Mostrar una alerta indicando que la habitación ya está disponible
            setOpenAlertSeteada(true);
        } else {
            try {
                await axios.put(`/rooms`, {
                    room_number: roomNumber,
                    available: false,
                });
                // Actualizar el estado disabledRooms con la nueva habitación seteada
                setDisabledRooms((prevDisabledRooms) => [...prevDisabledRooms, roomNumber]);
                // Mostrar una alerta indicando que se actualizó correctamente
                setOpenAlertSuccess(true);
            } catch (error) {
                console.log("Error editing room:", error);
                // Mostrar una alerta indicando que ocurrió un error al actualizar la habitación
                setOpenAlertError(true);
            }
        }
    };

    const handleAlertSeteadaClose = () => {
        setOpenAlertSeteada(false);
    };

    const handleAlertSuccessClose = () => {
        setOpenAlertSuccess(false);
    };

    React.useEffect(() => {
        const filteredDisabledRooms = roomNumbersRooms.filter(roomNumber => roomNumbersHosts.includes(roomNumber));
        setDisabledRooms(filteredDisabledRooms);
    }, [roomsData, hostData]);

    React.useEffect(() => {
        getReservation()
        findMatchRooms()
    }, []);

    return (
        <React.Fragment>
            {/* Snackbar para alerta de habitación ya seteada */}
            <Snackbar open={openAlertSeteada} autoHideDuration={3000}
                onClose={handleAlertSeteadaClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="warning" onClose={handleAlertSeteadaClose}>
                    The room is already set as available
                </Alert>
            </Snackbar>

            {/* Snackbar para alerta de éxito */}
            <Snackbar open={openAlertSuccess}
                autoHideDuration={3000} onClose={handleAlertSuccessClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="success" onClose={handleAlertSuccessClose}>
                    The room has been updated successfully
                </Alert>
            </Snackbar>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#EFEEFF", borderBottom: "2px solid #9A98FE" }}>
                        <TableRow>
                            <TableCell align="center" sx={{ color: "#0400CB" }}>Room Name</TableCell>
                            <TableCell align="center" sx={{ color: "#0400CB" }}>Room Number</TableCell>
                            <TableCell align="center" sx={{ color: "#0400CB" }}>Check In</TableCell>
                            <TableCell align="center" sx={{ color: "#0400CB" }}>Check Out</TableCell>
                            {/* <TableCell align="center" sx={{ color: "#0400CB" }}>Set Available</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredReservations.slice(startIndex, endIndex).map((reservation, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                    {reservation.room_name}
                                </TableCell>
                                <TableCell align="center" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                    {reservation.room_number}
                                </TableCell>
                                <TableCell align="center" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                    {dayjs(reservation.room_check_in).format('YYYY-MM-DD')}
                                </TableCell>
                                <TableCell align="center" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                    {dayjs(reservation.room_check_out).format('YYYY-MM-DD')}
                                </TableCell>
                                {/* <TableCell align="center" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                    <Switch
                                        checked={disabledRooms.includes(reservation.room_number)}
                                        onChange={() => {
                                            handleSetAvailable(reservation.room_number, index)
                                        }
                                        }
                                        color="primary"
                                    />
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination
                    count={Math.ceil(filteredReservations.length / rowsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </TableContainer>

        </React.Fragment>
    );
}

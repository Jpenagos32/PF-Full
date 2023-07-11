import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { InputAdornment, Pagination, Stack, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';



export default function Reserves() {

    const [hostData, setHostData] = React.useState({ hosts: [] })
    const [currentPage, setCurrentPage] = React.useState(1);
    const [searchTerm, setSearchTerm] = React.useState("");
    

    const Page = 10;
    const totalRows = hostData.hosts.reduce((total, host) => total + host.reservations.length, 0);
    const totalPages = Math.ceil(totalRows / Page);
  
    const filterHosts = (event) => {
        const { value } = event.target;
        const filteredHosts = hostData.hosts.map((host) => {
          const matchingReservations = host.reservations.filter(
            (reservation) =>
              reservation.date_in_out.includes(value) ||
              reservation.reservation_number.includes(value)
          );
          return { ...host, reservations: matchingReservations };
        });
        setHostData({ hosts: filteredHosts });
      };
      
    const getReservation = async () => {
        try {
            const response = await axios.get(`/hosts`)
            const hostsData = response.data
            setHostData(hostsData);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }

    };
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    React.useEffect(() => {
        getReservation()
    }, []);

    return (
        <did>
            <TextField
                id="standard-basic"
                variant="standard"
                label="Date In-Out #Reserves"
                value={searchTerm}
                onChange={filterHosts}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                    sx: {
                        fontSize: "12px",
                    }
                }}
                style={{ marginBottom: "1px", marginLeft: "80%" }}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: '#EFEEFF', borderBottom: '2px solid #9A98FE' }}>
                        <TableRow>
                            <TableCell sx={{ color: '#0400CB' }}>Guest Name</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Identification</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Email</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Phone</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Room Number</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Check In</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Check Out</TableCell>
                            <TableCell align="center" sx={{ color: '#0400CB' }}>Reservation Number</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>

                        {hostData.hosts.slice((currentPage - 1) * Page, currentPage * Page).map((row, index) => (

                            <React.Fragment key={index}>
                                {row.reservations.map((reservation, resIndex) => (

                                    <TableRow key={`${index}-${resIndex}`} >
                                        {resIndex === 0 ? (
                                            <>
                                                <TableCell component="th" scope="row" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.first_name} {row.last_name}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.identification}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                                    {row.contact.email}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.contact.phone}
                                                </TableCell>
                                            </>
                                        ) : (
                                            <>
                                                <TableCell component="th" scope="row" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.first_name} {row.last_name}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.identification}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.contact.email}
                                                </TableCell>
                                                <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>
                                                    {row.contact.phone}
                                                </TableCell>

                                            </>
                                        )}
                                        <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                            {reservation.room_number}
                                        </TableCell>
                                        <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                            {reservation.room_check_in}
                                        </TableCell>
                                        <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                            {reservation.room_check_out}
                                        </TableCell>
                                        <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                            {reservation._id}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
                <Stack sx={{ backgroundColor: "#F3F3F7", }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
            </TableContainer>
        </did>
    );
}


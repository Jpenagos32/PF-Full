import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AdminBookings() {
   
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead sx={{ backgroundColor: '#EFEEFF', borderBottom: '2px solid #9A98FE' }}>
                    <TableRow>
                        <TableCell sx={{ color: '#0400CB' }}>Dessert (100g serving)</TableCell>
                        <TableCell align="right" sx={{ color: '#0400CB' }}>Calories</TableCell>
                        <TableCell align="right" sx={{ color: '#0400CB' }}>Fat&nbsp;(g)</TableCell>
                        <TableCell align="right" sx={{ color: '#0400CB' }}>Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right" sx={{ color: '#0400CB' }}>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={name}>
                            <TableCell component="th" scope="row" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }} >
                                {row.name}
                            </TableCell>
                            <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>{row.calories}</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>{row.fat}</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>{row.carbs}</TableCell>
                            <TableCell align="right" sx={{ backgroundColor: index % 2 === 0 ? '#FAFAFF' : '#EFEEFF' }}>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >

    );
}


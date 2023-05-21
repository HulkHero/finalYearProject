import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{Box} from '@mui/material';




export default function PtcTable() {
  return (
    <TableContainer component={Box} sx={{maxWidth:700,ml:"auto",mr:"auto"}}>
      <Table sx={{ maxWidth: 700 }} aria-label="simple table">
        <TableHead>
            <TableRow><TableCell colSpan={3} align='center'>Ptc-Parameters</TableCell></TableRow>
          <TableRow>
            <TableCell align="center">Ptc-DC</TableCell>
            <TableCell align="center">Ptc-AC</TableCell>
            <TableCell align="center">Inverter %</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">-0.001413</TableCell>
              <TableCell align="center">0.001184</TableCell>
              <TableCell align="center">90</TableCell>
             
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
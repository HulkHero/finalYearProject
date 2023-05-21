import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{Box} from '@mui/material';




export default function BasicTable() {
  return (
    <TableContainer component={Box} sx={{maxWidth:700,ml:"auto",mr:"auto"}}>
      <Table sx={{ maxWidth: 700 }} aria-label="simple table">
        <TableHead>
            <TableRow><TableCell colSpan={9} align='center'>Stc Parameters</TableCell></TableRow>
          <TableRow>
            <TableCell>Voc</TableCell>
            <TableCell align="right">Isc</TableCell>
            <TableCell align="right">Vmax</TableCell>
            <TableCell align="right">Imax</TableCell>
            <TableCell align="right">Pmax Dc</TableCell>
            <TableCell align="right">Rp</TableCell>
            <TableCell align="right">Rs</TableCell>
            <TableCell align="right">FF</TableCell>
            <TableCell align="right">Efficency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">2.7798</TableCell>
              <TableCell align="right">0.1168</TableCell>
              <TableCell align="right">2.3506</TableCell>
              <TableCell align="right">0.0971</TableCell>
              <TableCell align="right">0.2284</TableCell>
              <TableCell align="right">221.862</TableCell>
              <TableCell align="right">0.7034</TableCell>
              <TableCell align="right">1.749</TableCell>
              <TableCell align="right">0.0223</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
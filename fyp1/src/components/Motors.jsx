
import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import { Button ,Modal,Box,Typography,Paper, Divider} from '@mui/material'
import io from "socket.io-client";
import NoteContext from '../context/noteContext';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StopIcon from '@mui/icons-material/Stop';
const address="http://192.168.218.125"
const Motor = () => {

    const handleUp=()=>{
        axios.post(`${address}/motorUp`).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleStop=()=>{
        axios.post(`${address}/motorStop`).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }
    const handleDown=()=>{
        axios.post("http://192.168.218.125/motorDown").then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Paper sx={{ border: '2px solid white',borderRadius:"12px",minHeight:"25vh",minWidth:"200px",m:2}}>
    <Box sx={{opacity:"0.8"}}>
    <Typography variant="h5" component="h5" sx={{textAlign:"center"}}>Motor Controls</Typography>
    <Divider></Divider>
    <Box sx={{display:"flex",margin:"auto",flexDirection:"column",alignItems:"center",rowGap:1,mt:1,justifyContent:"center"}}>
     <Button onClick={()=>{handleUp()}} variant='contained' sx={{minWidth:"70px",paddingTop:1,borderTopLeftRadius:100,borderTopRightRadius:100}}><ArrowUpwardIcon></ArrowUpwardIcon></Button>
     <Button onClick={()=>{handleStop()}} variant='contained' sx={{minWidth:"70px"}} color='error'><StopIcon></StopIcon></Button>
     <Button onClick={()=>{handleDown()}} variant='contained' sx={{minWidth:"70px",paddingTop:1,borderBottomLeftRadius:100,borderBottomRightRadius:100}}><ArrowDownwardIcon></ArrowDownwardIcon></Button>
     </Box>
     </Box>
</Paper>
</div>
  )
}

export default Motor
import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import { Button ,Modal,Box,Typography,Paper, Divider} from '@mui/material'
import io from "socket.io-client";
import NoteContext from '../context/noteContext';
const socket=io("http://localhost:4000");

const Logs = () => {
     const a=useContext(NoteContext)
    const [messege, setMessege] = useState([])

    useEffect(() => {
        socket.on("messege",(data)=>{
          //setMessege(messege.concat(data))
    
          a.setMessege(messege => [...messege, data])
        })
    }, [socket])
   
  return (
    <Paper sx={{ border: '2px solid white',borderRadius:"12px",minHeight:"25vh",minWidth:"200px",}}>
        <Box sx={{opacity:"0.8"}}>
        <Typography variant="h5" component="h5" sx={{textAlign:"center"}}>Logs</Typography>
        <Divider></Divider>
         {a.messege.map((item,index)=>(
              <div>
             <Typography  key={index} variant="h6" component="h6" sx={{padding:"3px",fontWeight:"300"}}>{item}</Typography>
               <Divider key={index+10}></Divider>
               </div>
         ))}
         </Box>
    </Paper>

  )
}

export default Logs
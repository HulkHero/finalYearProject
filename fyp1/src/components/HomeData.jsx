import React,{useState,useEffect,useContext,useRef} from 'react'
import axios from 'axios'
import LineChart from './LineChart'
import { Button ,Modal,Box,Typography,Paper} from '@mui/material'
import io from "socket.io-client";
import DumyChart from './DumyChart';
import NoteContext from '../context/noteContext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LoadingButton from '@mui/lab/LoadingButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import { svgToPdf } from "./utils";
const socket=io("http://localhost:4000")

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  outlineWidth:"4px",
  outlineColor:"#0097a7",
  border: '2px solid primary.main',
  boxShadow: 24,
  padding: 4,
  backgroundColor: '#b3ffb3',
  minHeight:"150px",
};
const HomeData = () => {
  const source = axios.CancelToken.source();
    const a=useContext(NoteContext);

    const containerRef = useRef();

    const handleExport = () => svgToPdf(containerRef.current);
  
    const [sloading, setSloading] = useState(false)
    const [rloading, setRloading] = useState(false)
    const [data,setData] = useState(null)
    const [open, setOpen] = useState(false);
    const [errorText, setErrorText] = useState({title:"",message:""})
    useEffect(() => {
      console.log("socket")
     socket.on("messege",(data)=>{
    
     })
     socket.on("error",(data)=>{
      console.log("data",data)
     
     })
     
    }, [socket])

    const handleStart=()=>{
      setSloading(true)
      a.reset();
      axios.get('http://localhost:4000/voltage',{cancelToken:source.token}).then(res => {
        console.log(res.data)
        a.setData([
          {
            "id": "MPP",
            "color": "magenta",
            "data":[{
              "x":res.data.mpp.voltage,
              'y':res.data.mpp.current
            }]
        },
            {
            "id": "iv",
           "color": "hsl(0, 70%, 50%)",
             "data":
                res.data.current.map((item,index)=>(
                    {"x":res.data.voltage[index],"y":item}
                ))

             
        },
    {
        "id": "power",
        "data":
              res.data.power.map((item,index)=>(
                {"x":res.data.voltage[index],"y":item}
              ))
    }])
       setSloading(false)
      }).catch(err => {
        console.log(err)
        setSloading(false)
      })
    }

    const handleReset=()=>{
      source.cancel("Operation canceled by the user."); 
      setRloading(true)
      axios.get("http://localhost:4000/reset").then(res=>{
        console.log(res.data)
        a.reset();
        setRloading(false)

      }).catch(err=>{
        setRloading(false)
        setErrorText({
          title:"Error",
          message:err.response.data
        })
        setOpen(true)
        console.log(err)
      })
    }
  
  return (
    <>
   
    <div style={{display:'flex',flexDirection:'column',justifyContent:"center"}}>
    
    <LoadingButton    
        loading={sloading}
        loadingPosition="end"
        endIcon={<KeyboardArrowRightIcon />} 
        variant="contained" onClick={()=>{handleStart()}} color="primary" style={{margin:"10px"}}>Start</LoadingButton>
 
      <Button variant="contained" style={{margin:"10px"}} onClick={handleExport} endIcon={<SaveAltRoundedIcon></SaveAltRoundedIcon>}>PDF</Button>
    <LoadingButton 
     loading={rloading}
     loadingPosition="end"
     endIcon={<RestartAltIcon />} 
    variant="contained" color="error" onClick={()=>{handleReset()}} style={{margin:"10px"}}>Reset</LoadingButton>
    </div>
   
<Modal
  open={open}
  onClose={()=>{setOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Paper elevation={5} style={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:"red"}}>
      {errorText.title}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
      {errorText.message}
    </Typography>
    <Button onClick={()=>setOpen(false)} variant={'text'} sx={{borderRadius:'12px', position:'absolute',bottom:'0',right:'0' ,mt:"auto",ml:'auto'}} >ok</Button>
  </Paper>
</Modal>
    <div style={{height:"300px",width:"600px"}}>
    {a.data?
      <div style={{height:"300px",width:"600px"}} ref={containerRef} >
    <LineChart data={a.data}></LineChart>
    </div>
    :<div style={{height:"300px",width:"600px"}}><DumyChart></DumyChart></div>}
    </div>
    </>
    
  )
}

export default HomeData;

//elevation={5} sx={{borderRadius:"12px" ,outlineWidth:"4px",outlineColor:"Menu",minWidth:"300px",minHeight:"150px",position:'absolute',left:"50%",top:"50%",transform:"translate(-50%,-60%)",}}













// axios.get('http://localhost:4000/voltage').then(res => {
//   console.log(res.data)
//   setData([
//     {
//       "id": "MPP",
//       "color": "magenta",
//       "data":[{
//         "x":res.data.mpp.voltage,
//         'y':res.data.mpp.current
//       }]
//   },
//       {
//       "id": "iv",
//      "color": "hsl(0, 70%, 50%)",
//        "data":
//           res.data.current.map((item,index)=>(
//               {"x":res.data.voltage[index],"y":item}
//           ))

       
//   },
// {
//   "id": "power",
//   "data":
//         res.data.power.map((item,index)=>(
//           {"x":res.data.voltage[index],"y":item}
//         ))
// }])
// }).catch(err => {
//   console.log(err)
// })

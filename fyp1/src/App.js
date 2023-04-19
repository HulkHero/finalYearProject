import logo from './logo.svg';
import './App.css';
import HomeData from './components/HomeData';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material';
import Logs from './components/Logs';
import NoteState from './context/noteContext';
import { Grid } from '@mui/material';
function App() {
  return (

    <ThemeProvider theme={theme}>
      <Grid container sx={{}} direction="row" >
        <Grid item xs={8} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItem: "center" }} ><HomeData></HomeData></Grid>
        <Grid item xs={4} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", mt: "20px" }}><Logs></Logs></Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;

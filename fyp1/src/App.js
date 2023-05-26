import HomeData from './components/HomeData';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material';
import Logs from './components/Logs';
import { Grid } from '@mui/material';
import BasicTable from './components/Table';
import PtcTable from './components/PtcTable';
import Motor from './components/Motors';
function App() {
  return (

    <ThemeProvider theme={theme}>
      <Grid container sx={{}} direction="row" >
        <Grid item xs={2} spacing={2}><Motor></Motor></Grid>
        <Grid item xs={7} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItem: "center" }} ><HomeData></HomeData></Grid>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", mt: "20px" }}><Logs></Logs></Grid>
        <Grid item xs={12} sx={{ mt: 2 }} ><BasicTable></BasicTable></Grid>
        <Grid item xs={12} sx={{ mt: 2 }} ><PtcTable></PtcTable></Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;

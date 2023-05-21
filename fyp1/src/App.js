import HomeData from './components/HomeData';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material';
import Logs from './components/Logs';
import { Grid } from '@mui/material';
import BasicTable from './components/Table';
import PtcTable from './components/PtcTable';
function App() {
  return (

    <ThemeProvider theme={theme}>
      <Grid container sx={{}} direction="row" >
        <Grid item xs={8} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItem: "center" }} ><HomeData></HomeData></Grid>
        <Grid item xs={4} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", mt: "20px" }}><Logs></Logs></Grid>
        <Grid item xs={12} sx={{ mt: 2 }} ><BasicTable></BasicTable></Grid>
        <Grid item xs={12} sx={{ mt: 2 }} ><PtcTable></PtcTable></Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;

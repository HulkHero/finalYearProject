import logo from './logo.svg';
import './App.css';
import HomeData from './components/HomeData';
import theme from "./Theme";
import { ThemeProvider } from '@mui/material';
import Logs from './components/Logs';
import NoteState from './context/noteContext';
function App() {
  return (

    <ThemeProvider theme={theme}>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <HomeData></HomeData>
        <Logs></Logs>
      </div>
      {/* </div>
        <Actions></Actions>
      </div> */}
    </ThemeProvider>

  );
}

export default App;

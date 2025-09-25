import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom'
import theme from './Components/Theme/theme.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>

  </StrictMode>
);

reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth } from "./hooks/useAuth";

// import axios from "axios";

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'

// axios.defaults.baseURL = 'http://localhost';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const theme = createTheme({
//   palette: {
//     primary: { main: "#3a34d2" }
//   }
// });

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          {/* <ThemeProvider theme={theme}> */}
            <App />
          {/* </ThemeProvider> */}
        </Auth>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

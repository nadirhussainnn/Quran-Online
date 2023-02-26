import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
          <ToastContainer />
        <App />
    </BrowserRouter>
);
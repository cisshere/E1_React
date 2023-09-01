import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Modal from "react-modal"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>,
);
Modal.setAppElement('#root');

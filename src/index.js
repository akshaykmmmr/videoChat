
import React from 'react';
import App from './App';
import './styles.css';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './SocketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
   
  </React.StrictMode>
);
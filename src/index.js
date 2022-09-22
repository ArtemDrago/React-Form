import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataProvider } from './context/DataContext';
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DataProvider>
        <App />
      </DataProvider>
    </React.StrictMode>
  </BrowserRouter>
);


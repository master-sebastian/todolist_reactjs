import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/js/App';
import { AppIUContextProvider } from './pages/js/AppIUContext';
import './lib/css/base_style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppIUContextProvider>
    <App/>
  </AppIUContextProvider>
);
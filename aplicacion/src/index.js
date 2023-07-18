import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ejemplo from './Ejemplo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ejemplo = ReactDOM.createRoot(document.getElementById('ejemplar'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ejemplo.render(
  <React.StrictMode>
  <Ejemplo />
</React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

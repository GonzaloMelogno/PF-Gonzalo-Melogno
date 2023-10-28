import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV9lO6oTxg1l3wkPaNBQ8t5N1eoxaxxSM",
  authDomain: "dbproductos-17a3b.firebaseapp.com",
  projectId: "dbproductos-17a3b",
  storageBucket: "dbproductos-17a3b.appspot.com",
  messagingSenderId: "517180176185",
  appId: "1:517180176185:web:66d46d5e7933cc32585ae8"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

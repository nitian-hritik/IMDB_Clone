// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" instead of "react-dom"
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
 </React.StrictMode>
);

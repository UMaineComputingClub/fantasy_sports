import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';



const Other = () => {
    return (
        <div>
            <h1>Other page</h1>
            <Link to="/home">
            <p>Sub text</p>
            </Link>
        </div>
      );
};
export default Other;
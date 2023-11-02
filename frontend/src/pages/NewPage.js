import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../ariusimg.png'

const NewPage = () => {
    return (
        <div>
            <h1>New page</h1>
            <img src={logo} alt="Logo" />;
            <Link to= "/other">
            <p>"Back to other"</p>
            </Link>

            <Link to= "/home">
            <p>"Let's go home"</p>
            </Link>
        </div>
    );

};
export default NewPage;
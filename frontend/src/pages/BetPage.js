import React from "react";
import '../css/BetPage.css';
import { Link } from 'react-router-dom';
import logo from '../ariusimg.png'

const BetPage = () => {
    return (
        <div>
            <h1>Bet Page:</h1>
            <img src={logo} alt="Logo" />;
            
            <Link to= "/other">
            <p>"Back to other"</p>
            </Link>

            <Link to= "/home">
            <p>"Let's go home"</p>
            </Link>

            <p className = "body">He He He Ha</p>
        </div>
    );

};
export default BetPage;
import React from "react";
import '../css/BetPage.css';
import { Link } from 'react-router-dom';
import logo from '../ariusimg.png'

const BetPage = () => {
    return (
        <div>
            <h1></h1>
            <h1></h1>

            <div className= "header"> { }
            {
                <div className="header">
                    <h1>Bet Page:</h1>
                </div>
            }
            </div>

            <div className= "teamName1"> { }
            {
                <div className="teamName1">
                    <h3>Team 1</h3>
                </div>
            }
            </div>

            <div className= "teamLogo"> { }
            {
                <div className="teamLogo">
                    <img src={logo} alt="Logo" />;
                </div>
            }
            </div>

        </div>
    );

};
export default BetPage;
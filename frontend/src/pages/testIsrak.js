import React from "react";
import '../css/testIsrak.css';
import { Link } from 'react-router-dom';

const testIsrak = () => {
    return (
        <div className= "body"> { }
            {
        <div className="body">
            <section>
                <div> 
                    <h1> Hello world</h1>
                </div>
            <h1>Home</h1>
                <div className="box">
                    <Link to= "/other">
                    <p>It's something</p>
                    </Link>
                </div>
            </section>
            </div>
            }
        </div>
      );
};
import React from "react";
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

export const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br5 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa2"> 
                    <img style={{width:'75%'}} alt="logo" src={brain}></img>
                </div>
            </Tilt>
        </div>
    )
}
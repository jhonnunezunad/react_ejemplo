import React from "react";
import imagen from './imagenes/ejemplo.jpg';
import './Ejemplo.css';

function Ejemplo(){
    return(
        <div>
            <img src={imagen}/>
            <p>escribir algo</p>
        </div>
    );
}
export default Ejemplo;
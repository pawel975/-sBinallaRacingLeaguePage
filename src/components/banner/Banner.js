import React from "react";
import header from '../../assets/img/header.png';
import './banner.scss'

const Banner = () => {

    return (
        <>
            <div id="main-banner" role='banner'>
                <img src={header}/>
            </div>
        </>
    )
}

export default Banner
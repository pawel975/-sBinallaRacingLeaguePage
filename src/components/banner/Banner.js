import React from "react";
import './banner.scss'
import headerBannerImg from '../../assets/img/header.png';

const Banner = () => {

    return (
        <>
            <div id="main-banner" role='banner'>
                <img src={headerBannerImg}/>
            </div>
        </>
    )
}

export default Banner
import React from "react";
import './banner.scss'
import headerBannerImg from '../../assets/img/header.png';
import sBinallaLogo from '../../assets/img/sBinallaLogo.svg';

const Banner = () => {

    return (
        <>
            <div id="main-banner" role='banner'>
                <img id="bannerBackground" src={headerBannerImg}/>
                <img id="logo" src={sBinallaLogo}/>
            </div>
        </>
    )
}

export default Banner
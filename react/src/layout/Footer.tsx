import React from 'react';
import { useLocation } from 'react-router-dom';
import Footerlogo from '../assets/img/logo/Footerlogo.svg';

const Footer = () => {
    const location = useLocation();
    const isResultPath = location.pathname.includes('result');

    return (
        <div className={`py-10 flex justify-center ${isResultPath ? 'bg-white' : ''}`}>
            <a href="https://www.indj.ai/" target="_blank" rel="noreferrer">
                <img src={Footerlogo} alt="" />
            </a>
        </div>
    );
};

export default Footer;

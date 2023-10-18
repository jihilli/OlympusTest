import React from 'react';
import Footerlogo from '../assets/img/logo/Footerlogo.svg';

const Footer = () => {
  return (
    <div className="py-10 flex justify-center">
      <a href="https://www.indj.ai/" target="_blank">
        <img src={Footerlogo} alt="" />
      </a>
    </div>
  );
};

export default Footer;

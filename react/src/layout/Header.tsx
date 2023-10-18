import React from 'react';
import Headerlogo from '../assets/img/logo/Headerlogo.svg';

const Header = () => {
  return (
    <div className="text-white bg-black py-4">
      <a href="https://www.indj.ai/" target="_blank">
        <img className="ml-5" src={Headerlogo} alt="" />
      </a>
    </div>
  );
};

export default Header;

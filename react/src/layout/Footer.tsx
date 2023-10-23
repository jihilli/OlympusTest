import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isResultPath = location.pathname.includes('result');

  return (
    <div
      className={`py-10 flex justify-center ${isResultPath ? 'bg-white' : ''}`}
    >
      <a href="https://www.indj.ai/" target="_blank" rel="noreferrer">
        <img
          src="https://indj.s3.ap-northeast-2.amazonaws.com/image/event/olympus/Footerlogo.svg"
          alt=""
        />
      </a>
    </div>
  );
};

export default Footer;

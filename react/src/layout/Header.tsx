import React from 'react';

const Header = () => {
  return (
    <div className="text-white bg-black py-4">
      <a href="https://www.indj.ai/" target="_blank">
        <img
          className="ml-5"
          src="https://indj.s3.ap-northeast-2.amazonaws.com/image/event/olympus/Headerlogo.svg"
          alt=""
        />
      </a>
    </div>
  );
};

export default Header;

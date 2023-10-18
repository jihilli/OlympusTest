import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
      <img className="w-full" src="./logo.svg" alt="logo" />
      <p className="mt-4 text-center">ㅇㅇ</p>
      <Link to="/main">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          테스트 시작하기
        </button>
      </Link>
    </div>
  );
};

export default Intro;

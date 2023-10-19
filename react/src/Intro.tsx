import React from 'react';
import { Link } from 'react-router-dom';
import IntroImage from './assets/img/intro.png';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <img src={IntroImage} className="w-full h-auto" />
      <p className="mt-36 mb-32 text-center text-2xl font-custom1">
        내가
        <span className="text-yellow-500 font-bold"> 올림포스의 신</span>
        이었다면 <br /> 어떤 음악을 들었을까?
      </p>
      <Link to="/main">
        <button className="mt-10 px-36 py-4 bg-custom-black2 text-white rounded-xl font-custom2 ">
          시작하기
        </button>
      </Link>
      <span className="mt-5 font-custom2">지금까지 000,000명이 참여했어요</span>
    </div>
  );
};

export default Intro;

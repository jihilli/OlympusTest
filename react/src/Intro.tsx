import React from 'react';
import { Link } from 'react-router-dom';
import IntroImage from './assets/img/intro.png';

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <img src={IntroImage} className="w-full h-auto" />
            <p className="mt-4 text-center">
                내가 올림포스의 신이었다면 <br /> 어떤 음악을 들었을까?
            </p>
            <Link to="/main">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">테스트 시작하기</button>
            </Link>
        </div>
    );
};

export default Intro;

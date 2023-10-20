import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import 인트로이미지
import IntroImage from './assets/img/intro.png';

const Intro = () => {
    // 참여자 수 요청
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getCount = async () => {
            try {
                const response = await axios.get(`https://api2.indj.club/event/api/MBTILog?type=3`);
                setCount(response.data.count);
            } catch (error) {
                console.error('Failed to fetch count:', error);
            }
        };

        getCount();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto ">
            <img src={IntroImage} className="w-full h-auto top-0" />
            <p className="mt-24 mb-12 text-center text-2xl font-custom1">
                내가
                <span className="text-yellow-500 font-bold"> 올림포스의 신</span>
                이었다면 <br /> 어떤 음악을 들었을까?
            </p>
            <Link to="/main">
                <button className="mt-10 px-36 py-4 bg-custom-black2 text-white rounded-xl font-custom2 ">
                    시작하기
                </button>
            </Link>
            <span className="mt-5 font-custom2">지금까지 {count}명이 참여했어요</span>
        </div>
    );
};

export default Intro;

import React from 'react';
import testCover from '../../assets/img/music/testCover.svg';

const Music = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between flex-grow mb-4">
                <div className="flex flex-row items-center w-[300px] flex-grow">
                    <img src={testCover} className="w-[60px] h-[60px] rounded-lg" />
                    <div className="flex flex-col ml-4">
                        <p className="text-xl font-bold mb-0.5">곡 제목</p>
                        <p className="text-gray-500">아티스트명</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Music;

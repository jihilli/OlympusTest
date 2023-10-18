import React from 'react';
import testCover from '../../assets/img/music/testCover.svg';
import star from '../../assets/img/chars/star.svg';

const Playlist = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-14 ">
      <img src={star} className="m-14 w-[50px]" />
      <p className="mb-16 text-2xl font-extrabold font-custom1">
        인디제이 추천 플리
      </p>
      <div className="flex flex-col justify-center items-center">
        {/* 1. 앨범 이미지 */}
        <img
          src={testCover}
          alt=" "
          className="rounded-xl w-[200px] h-[200px] object-cover "
        />
        {/* 2. 제목/ 아티스트 */}
        <p className="mt-5 text-lg font-semibold font-custom2">
          플레이리스트 이름
        </p>
      </div>
    </div>
  );
};

export default Playlist;

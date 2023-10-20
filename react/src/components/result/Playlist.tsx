import React from 'react';
import testCover from '../../assets/img/music/testCover.svg';
import star from '../../assets/img/chars/star.svg';

// import - 데이터
import musicData from '../../assets/data/musicData.json';

interface MusicProps {
    id: number;
}

const Playlist = ({ id }: MusicProps) => {
    // 랜덤 인덱스 생성 함수
    const getRandomIndex = (id: number): number => {
        const min = id * 3;
        const max = min + 2;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // 랜덤 인덱스로 항목 가져오기
    const index = getRandomIndex(id);
    const item = musicData[index];

    return (
        <div>
            <div className="flex flex-col justify-center items-center mb-14 ">
                <img src={star} className="mt-10 mb-16 w-[50px]" />
                <p className="mb-16 text-3xl font-extrabold font-custom1">인디제이 추천 플리</p>
                <div className="flex flex-col justify-center items-center">
                    {/* 1. 앨범 이미지 */}
                    <img src={item.stationCover} alt=" " className="rounded-xl w-[200px] h-[200px] object-cover " />
                    {/* 2. 제목/ 아티스트 */}
                    <p className="mt-5 text-lg font-semibold font-custom2">{item.stationTitle}</p>
                </div>
            </div>

            {item.station.slice(0, 3).map((song, index) => (
                <div key={index} className="flex flex-row items-center justify-between flex-grow mb-5">
                    <div className="flex flex-row items-center w-[300px] flex-grow">
                        <img src={song.songCover} className="w-[60px] h-[60px] rounded-xl" />
                        <div className="flex flex-col ml-4 font-custom2">
                            <p className="text-xl font-semibold mb-0.5">{song.songTitle}</p>
                            <p className="text-gray-500">{song.songArtist}</p>
                        </div>
                    </div>
                </div>
            ))}
            <p className="ml-1 font-custom2 text-lg font-semibold">외 {item.station.length - 3}곡</p>
        </div>
    );
};

export default Playlist;

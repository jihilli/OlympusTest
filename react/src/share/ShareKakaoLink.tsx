import React from 'react';
// import Kakao from '../global.d.ts';

interface ShareKakaoLinkProps {
    item: {
        id: string;
        output: string[];
    };
}

const ShareKakaoLink: React.FC<ShareKakaoLinkProps> = ({ item }) => {
    // 카카오톡으로 링크 공유하기 기능
    const share = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '내가 올림포스 신이라면?',
                description: item.output,
                imageUrl:
                    'https://img.freepik.com/free-vector/olympian-gods-flat-icon-set-with-athena-appolo-hera-zeus-hestia-demeter-aphrodite-ares-hermes-hephaestus-poseidon-artemis-figures-vector-illustration_1284-80695.jpg',
                link: {
                    mobileWebUrl: window.location.origin + '/result/' + item.id,
                    webUrl: window.location.origin + '/result/' + item.id,
                },
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: window.location.origin + '/result/' + item.id,
                        webUrl: window.location.origin + '/result/' + item.id,
                    },
                },
                {
                    title: '나도 하러가기',
                    link: {
                        mobileWebUrl: window.location.origin,
                        webUrl: window.location.origin,
                    },
                },
            ],
        });
    };

    return (
        <button onClick={share} className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded">
            카카오링크 공유하기
        </button>
    );
};

export default ShareKakaoLink;

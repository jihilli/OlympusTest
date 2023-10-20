import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// import - 컴포넌트
import ShareKakaoLink from './share/ShareKakaoLink.tsx';

// import - 신/여신 이미지
import zeus from './assets/img/chars/zeus.svg';
import ares from './assets/img/chars/ares.svg';
import apollon from './assets/img/chars/apollon.svg';
import hermes from './assets/img/chars/hermes.svg';
import athena from './assets/img/chars/athena.svg';
import artemis from './assets/img/chars/artemis.svg';
import demeter from './assets/img/chars/demeter.svg';
import hestia from './assets/img/chars/hestia.svg';

// import - 공유 이미지
import Kakao from './assets/img/logo/kakao-talk.png';
import LinkShare from './assets/img/logo/linkRound.svg';
import Facebook from './assets/img/logo/facebook.png';
import X from './assets/img/logo/xImg.png';
import resultTitle from './assets/img/resultTitle.svg';

// import 컴포넌트
import Playlist from './components/result/Playlist.tsx';

type ResultProps = {
    result: string;
    img: string;
};

const resultInfo = [
    {
        // ETJ - 제우스
        id: 0,
        img: zeus,
        description: `당신은 제우스처럼 명확하고 결단력 있는 성격으로 알려져 있어요. 리더십이 강하고 적극적인 성격과 행동력을 가지고 있어, 그룹 내에서는 종종 지도자 역할을 맡습니다. / 어떤 상황에서든 주도적인 역할을 자주 맡게 되는데, 이는 당신의 확고한 주관과 직설적인 표현력 때문입니다. 복잡하거나 어려운 문제에 직면했을 때도 빠르고 정확하게 해결하는 당신의 능력은 주변 사람들에게 큰 신뢰를 줍니다. / 현실적이고 분석적인 사람으로서 문제 해결에 강인한 의지와 결단력을 가지고 있습니다. 그러나 때로는 너무 강력한 의지와 과감한 결정으로 인해 다른 사람들이 당황하거나 어렵게 느낄 수 있어요. / 하지만 이런 점도 당신이 추구하는 목표를 향해 한결같이 나아가는 모습에서 비롯된 것입니다. 자신만의 길을 가기 위해 필요한 결정은 과감하게 내리며, 독특한 존재감으로 주변에 활력과 에너지를 불어넣곤 합니다.`,
    },
    {
        // ETP - 아레스
        id: 1,
        img: ares,
        description: `당신은 아레스처럼 대담하고 용맹한 성격으로 알려져 있어요. 새로운 도전을 두려워하지 않으며, 어떤 장애물이든 극복하려는 강인한 의지를 가지고 있습니다. / 생기발랄하고 직설적인 성격을 가진 당신은 주변 사람들과의 소통에서 항상 앞장서는 역할을 하며, 그룹 내에서는 중심 인물이 되곤 합니다. 당신은 강한 의사 표현력과 함께 빠른 판단력으로 행동에 옮기며 주변 사람들로부터 리더십을 인정습니다. 숨겨진 관종끼를 드러내며, 때로는 무리 안에서 화려하게 빛나기도 합니다. / 당신은 감정보다는 논리와 사실에 기반하여 판단하는 경향이 있어요. 이로 인해 때때로 감정 표현이 서툴러 보일 수도 있지만, 한편으로는 이런 점이 당신의 공정함과 객관성을 더욱 부각시킵니다. / 당신은 열정적이며 창의적인 사람으로, 사람들과의 관계에서 활력과 에너지를 선호합니다. 또한 유연성과 적응력이 뛰어나 여러 상황에 잘 대처하며, 새로운 경험을 즐기는 모험가 성향도 가지고 있습니다. 때론 충동적으로 보일 수도 있지만, 그만큼 단호하게 목표를 향해 나아가는 모습도 보여줍니다.`,
    },
    {
        // EFJ - 아폴론
        id: 2,
        img: apollon,
        description: `당신은 아폴론처럼 따뜻하고 친절한 성격으로 알려져 있어요. 사람들과의 소통에서 항상 공감능력을 발휘하며, 그룹 내에서는 종종 분위기 메이커나 중재자 역할을 맡습니다. / 당신은 뛰어난 사회성과 함께 조화롭게 상황을 유지하는 능력으로 대인 관계를 유지해 나가는 경향이 있어요. 이런 성격 때문에 어떤 상황에서도 안정적인 분위기를 만들며, 주변 사람들로부터 신뢰와 의지를 받곤 합니다. / 하지만 때때로 타인의 기대나 요구에 부응하기 위해 너무 많은 에너지를 사용할 수 있습니다. 다양한 선택지 중에서 최선의 결정을 내리려는 과정에서 타인의 생각을 과도하게 반영하는 경향이 있죠. 그럼에도 불구하고, 당신은 주변 사람들과 조화롭게 지내는 것을 중요시합니다. 이해심 깊고 배려심 있는 모습으로, 때로는 무리 안에서 따스한 햇살 같은 존재가 됩니다. / 당신은 친절하고 사회적인 사람으로, 다른 사람들의 감정과 필요를 잘 이해하고 공감합니다. 또한, 조직과 집단에서의 조화를 중요시하며, 자신이 속한 조직이 원활하게 운영되도록 노력하는 경향이 있습니다. `,
    },
    {
        // EFP - 헤르메스
        id: 3,
        img: hermes,
        description: `당신은 헤르메스처럼 유연하고 창조적인 성격으로 알려져 있어요. 주변 사람들과의 소통할 때 항상 새로운 아이디어와 감각적인 표현을 선보이며, 그룹 내에서 종종 분위기 메이커 역할을 맡아 활기를 불어넣습니다. / 당신은 감정 표현이 풍부하고 사람들과의 관계에서 따뜻함을 선호합니다. 주변 사람들과 소통할 때 항상 새로운 아이디어와 감각적인 표현을 선보임으로써 두드러집니다. 이는 다른 사람들에게 긍정적인 에너지를 전달하며, 동시에 당신 자신도 그런 에너지를 받아들입니다. 또한, 유연성과 적응력이 뛰어나 여러 상황에 잘 대처하는 모습을 보여주며, 새로운 경험과 모험을 즐기는 성격입니다. / 당신은 강한 직관력과 함께 뛰어난 통찰력으로 상황을 판단하고 대처하는 경향이 있습니다. 이럴 때마다 주변 사람들로부터 독특한 인사이트를 제공하는 사람으로 인정받고는 합니다. / 하지만 때때로 감정에 휘둘릴 수 있고, 다양한 선택지 중에서 최선의 결정을 내리려는 과정에서 비교적 오래 고민하는 모습도 보입니다. 하지만 이것마저도 숨겨진 예술가처럼 당신의 독특함과 창조성을 드러내게 됩니다.`,
    },
    {
        // ITJ - 아테나
        id: 4,
        img: athena,
        description:
            '당신은 아테나처럼 논리적이고 분석적인 성격으로 알려져 있으며, 주변 사람들에게는 체계적인 사고력과 뛰어난 조직력을 보여줍니다. 이해심 깊고 배려심 있는 모습으로, 때로는 안정된 리듬 아래서 창조적인 영감을 주는 존재가 됩니다. / 감정보다 이성적인 판단으로 상황을  해결하는 것을 선호합니다. 현명하고 뛰어난 판단력으로 문제 해결에 접근하는 경향이 있으며, 이로 인해 다른 사람들에게 좋은 조언자가 됩니다. 주변 사람들과의 소통에서 항상 체계적인 생각을 나누며, 그룹 내에서는 종종 계획을 세우거나 구조화하는 역할을 맡습니다. / 당신은 독립적인 성격과 함께 뛰어난 조직력으로 일상 생활 속에서 체계적으로 문제를 해결해 나가는 경향이 있어요. 이런 성격 때문에 어떤 상황에서도 침착하게 대처하며, 주변 사람들로부터 신뢰와 의지를 받곤 합니다. / 하지만 때때로 계획한 것을 지키려다 보니 융통성이 부족해질 수 있습니다. 모든 것을 완벽하게 준비하려는 욕심에서 벗어나기가 어렵죠. 그럼에도 불구하고, 당신은 자신의 판단과 계획을 중요시합니다.',
    },
    {
        // ITP - 아르테미스
        id: 5,
        img: artemis,
        description:
            '당신은 아르테미스처럼 신중하고 공손한 성격으로 알려져 있으며, 분석적이고 논리적인 사고로  문제를 해결하는 것에 능숙합니다. / 주변 사람들과의 소통에서 깊은 생각을 나누며, 창의적인 아이디어나 독특한 시각을 제시합니다. 이해심 깊고 배려심 있는 모습으로, 때로는 조용한 밤하늘 아래 달처럼 창조적인 영감을 주는 존재가 됩니다. 독립적인 성격과 함께 뛰어난 문제 해결 능력으로 일상 생활에서 독특한 해결책을 제시해 나가는 경향이 있어요. 이런 성격 때문에 어떤 상황에서도 침착하게 대처하며, 주변 사람들로부터 신뢰와 의지를 받습니다. / 독립적이고 분석적인 사람으로, 다른 사람들의 감정보다는 이성과 논리를 중요시합니다. 또한, 자신만의 시간을 중요시하며, 주어진 정보를 깊게 분석하고 복잡한 문제나 상황에 대해 깊게 생각하는 경향이 있습니다. / 하지만 때때로 복잡한 문제나 상황에 대해 너무 많은 시간을 할애할 수 있습니다. 다양한 선택지 중에서 최선의 결정을 내리려는 과정에서 과도하게 고민하지만, 당신은 자신의 판단과 직관을 중요시합니다.',
    },
    {
        // IFJ - 데메테르
        id: 6,
        img: demeter,
        description:
            '당신은 데메테르처럼 섬세하고 배려심 많은 성격으로 알려져 있어요. 부드러운 재즈 음악처럼 조화롭고 편안한 분위기를 만드는 사람입니다. / 조용하지만 천진난만한 인간성과 함께 헌신적인 성향을 가지고 있습니다. 내면의 가치와 원칙에 따라 행동하며 안정적인 환경을 추구합니다. 주변 사람들에게 따뜻한 위로와 지지를 제공하여 종종 조직 내에서 조화를 이루는 역할을 맡아요. 강한 직관력과 함께 뛰어난 통찰력으로 어떤 상황에서도 유연하게 대응합니다. 자신만의 시간과 공간도 중요시하지만, 타인과의 관계와 조화를 더 중요하게 생각합니다. / 상대방의 필요와 요구를 잘 파악하며, 필요한 자원이나 정보를 찾아내려 노력합니다. 다른 사람들의 기대나 요구에 부응하기 위한 노력을 아끼지 않아요. / 하지만 때로는 남에게 인정받기 위해 너무 많은 에너지를 사용할 수 있습니다. 다른 사람들의 기대나 요구에 부응하기 위한 과도한 노력이 스트레스로 작용할 수 있죠. 이런 성격 때문에 당신은 주변 사람들로부터 신뢰와 애정을 받으며, 그룹 활동에서 핵심적인 역할을 하곤 합니다.',
    },
    {
        //  IFP - 헤스티아
        id: 7,
        img: hestia,
        description:
            '당신은 헤스티아처럼 따스하고 친근한 성격으로 알려져 있어요. 배려심 깊고 따뜻한 모습으로, 때로는 화려한 무대 위에서 사랑받는 아이돌 같은 존재가 됩니다. / 당신은 감성적이고 창조적인 사람으로, 이해심 많은 편이며 감성적인 사고를 가지고 있어요. 다른 사람들의 감정을 잘 이해하여 그룹 내에서 안정감과 평화를 제공하는 역할을 합니다. 이런 성격 때문에 어떤 상황에서도 유연하게 대처하며, 주변 사람들로부터 친근감과 신뢰를 받곤 합니다. / 당신은 자신의 감정과 직관을 중요시합니다. 자신만의 공간을 중요시하며, 감정이나 상황에 대해 깊게 생각하는 경향이 있습니다. 나와 상관 없다면 크게 관여하지 않으나, 한 번 마음에 드는 사람이라면 적극적으로 호감을 표현하는 성향도 가집니다. / 하지만 복잡한 감정에 휘말려 스트레스를 받을 수도 있어요. 다양한 선택지 중에서 최선의 결정을 내리려는 과정에서 타인의 기대나 요구에 부응하기 위해 너무 많은 에너지를 사용할 수 있죠. 그럼에도 불구하고, 항상 따뜻하고 긍정적인 모습을 보여줍니다.',
    },
];

const Result: React.FC = () => {
    // 방문자수 증가
    useEffect(() => {
        const incCount = async () => {
            try {
                const response = await axios.post('https://api2.indj.club/event/api/insertMBTILog', { type: 3 });
                // console.log(response.data);
            } catch (error) {
                console.error('Failed to increment participant count:', error);
            }
        };

        incCount();
    }, []);

    // 결과 별 아이디
    const { id } = useParams();

    if (!id || isNaN(parseInt(id))) {
        return null;
    }

    let parsedId = parseInt(id);
    let info = resultInfo.find((info) => info.id === parsedId)!;

    if (!info) {
        return null; // 해당 결과가 없을 경우 렌더링하지 않음
    }

    let output: string[] = [];
    let title: string = '';

    switch (parseInt(id)) {
        case 0: // ETJ
            output = ['번개를 타고 하늘을 누비며,', '록의 강렬함과 파워를 닮은'];
            title = '제우스';
            break;
        case 1: // ETP
            output = ['용맹을 상징하며,', '랩의 날카로움과 도전적인 정신을 닮은'];
            title = '아레스';
            break;
        case 2: // EFJ
            output = ['태양을 지배하는 신,', '재즈의 세련된 표현과 깊이를 닮은'];
            title = '아폴론';
            break;
        case 3: // EFP
            output = ['여행과 소통을 상징하는 신,', '인디음악의 자유로움과 창조성을 닮은'];
            title = '헤르메스';
            break;
        case 4: // ITJ
            output = ['전략과 지혜의 여신,', '팝의 변화무쌍함과 계획적 구성을 닮은'];
            title = '아테나';
            break;
        case 5: // ITP
            output = ['달과 자연을 지배하는 여신,', '발라드의 섬세함과 깊이를 닮은'];
            title = '아르테미스';
            break;
        case 6: // IFJ
            output = ['농업과 풍요를 상징하는 여신', '재즈의 유연성과 창조성을 닮은'];
            title = '데메테르';
            break;
        case 7: // IFP
            output = ['온화함과 조화를 상징하는 신,', '댄스/아이돌 음악의 활력을 닮은'];
            title = ' 헤스티아 ';
            break;

        default:
            return null;
    }

    const copyLink = () => {
        navigator.clipboard
            .writeText(window.location.origin + '/result/' + id)
            .then(() => {
                alert('링크가 복사되었습니다.');
            })
            .catch((err) => console.error('Could not copy text: ', err));
    };

    const openStoreLink = () => {
        const userAgent = window.navigator.userAgent;

        let url;

        if (/android/i.test(userAgent)) {
            url = 'https://play.google.com/store/apps/details?id=com.indj.music';
        } else if (/iPad|iPhone|iPod|Apple Computer/.test(userAgent)) {
            url =
                'https://apps.apple.com/kr/app/indj-%EC%9E%90%EC%9C%A0%EB%A1%AD%EA%B2%8C-%EB%93%A3%EB%8A%94-%EC%83%81%ED%99%A9-%EA%B0%90%EC%84%B1-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5-%EC%9D%8C%EC%95%85/id1513542512';
        } else {
            url = 'https://www.indj.ai/';
        }

        window.open(url, '_blank');
    };

    const shareFacebook = () => {
        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookUrl, '_blank');
    };

    const shareTwitter = () => {
        const url = window.location.href;
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    };

    // 카카오톡 링크 공유
    const shareKakaoLink = () => {
        if (!window.Kakao.isInitialized()) {
            alert("Kakao SDK isn't initialized.");
            return;
        }
        // id를 사용해 resultInfo에서 해당 결과 정보 찾기
        const info = resultInfo.find((result) => result.id === Number(id));

        if (!info || !info.img) {
            console.error('Invalid image information.');
            return;
        }
        const description = output.join(' ');

        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '내가 올림포스 신이라면?',
                description: description,
                imageUrl: info.img,
                link: {
                    mobileWebUrl: window.location.origin + '/result/' + id,
                    webUrl: window.location.origin + '/result/' + id,
                },
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: window.location.origin + '/result/' + id,
                        webUrl: window.location.origin + '/result/' + id,
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
        <div className="bg-white">
            <div className="relative flex flex-col items-center justify-center text-center">
                <div>
                    <img src={info.img} alt="title" className="mb-6" />
                </div>
                <img src={resultTitle} alt=" " className="w-[95%] h-full mb-12" />
                <div className="absolute top-[594px] w-full flex flex-col items-center justify-center">
                    <div className="absolute w-full h-full text-2xl font-custom1">
                        {output.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    <span className="pr-7 pl-7 absolute top-[120px] left-0 w-full h-full text-4xl font-custom1">
                        {title}
                    </span>
                </div>
            </div>
            {/* 지희 시작 */}

            <p className="pr-7 pl-7 text-center font-custom2 leading-[1.6] font-semibold break-keep">
                {info.description.split('/').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                        <br />
                    </React.Fragment>
                ))}
            </p>
            {/* 추천 음악 */}
            <div className="pr-7 pl-7 mb-5">
                <Playlist id={parseInt(id)} />
            </div>
            {/* 지희 끝 */}
            <div className="pr-7 pl-7 flex space-x-4 w-[100%]">
                <button
                    onClick={openStoreLink}
                    className="mt-4 px-4 py-2 bg-custom-black2 text-white rounded-xl w-full font-custom2"
                >
                    전체 곡을 듣고 싶다면?
                </button>

                <Link to="/" className="w-full">
                    <button className="mt-4 px-4 py-3 bg-custom-black2 text-white rounded-xl w-full font-custom2">
                        다시하기
                    </button>
                </Link>
            </div>

            <span className="bg-white flex justify-center m-16 text-xl font-bold font-custom2">내 결과 공유하기</span>
            <div className="flex justify-center space-x-10 ">
                <img src={LinkShare} onClick={copyLink} className="h-[60px] w-[6] mt-[8px] cursor-pointer"></img>
                <img src={Kakao} onClick={shareKakaoLink} className="h-[60px] w-[60px] mt-[8px] cursor-pointer"></img>
                <img src={Facebook} onClick={shareFacebook} className="h-[60px] w-[60px] mt-[8px] cursor-pointer"></img>
                <img src={X} onClick={shareTwitter} className="h-[60px] w-[60px] mt-[8px] cursor-pointer"></img>
                {/* <ShareKakaoLink item={{ id: id, output: output }} /> */}
            </div>
        </div>
    );
};

export default Result;

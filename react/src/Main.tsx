import React, { useState } from 'react';
import './index.css';
import Result from './Result.tsx';
import { useNavigate } from 'react-router-dom';

type Answer = 1 | 2;

interface Question {
    category: 'E/I' | 'T/F' | 'J/P';
    answer: Answer;
}

// 질문리스트 시작
const questionsData = [
    {
        category: 'E/I',
        question: ['친구들과 재미있게 놀다가', <br />, '집에 돌아왔다면?'],
        answers: ['충전 완료! 다음 약속은 언제지?', '이제 혼자서 좀 쉬면서 에너지를 충전해야지'],
    },
    {
        category: 'E/I',
        question: ['새로운 아이디어를', <br />, '생각해 내야 한다면?'],
        answers: ['우선  사람들과 얘기하면서 아이디어가 잘 나올 것 같아', '일단 혼자 고민하는 시간이 필요할 것 같아'],
    },
    {
        category: 'E/I',
        question: ['오랜만에 만난', <br />, '친구들과의 모임에 갔다면?'],
        answers: [
            '모든 친구들과 함께 이야기 나누는 건 정말 즐거워!',
            '특정 몇몇 친구들과 깊은 이야기를 나누는 걸 좋아해',
        ],
    },
    {
        category: 'T/F',
        question: ['친구가 새로운 레시피로', <br />, '만든 요리를 대접한다면?'],
        answers: ['맛있네! 근데 양념이 좀 더 필요한 것 같아', '이걸 언제 다 준비했어? 고생 많았다!'],
    },
    {
        category: 'T/F',
        question: ['성공적인 결과를 냈을 때', <br />, " '재능 있네!' 라고 듣는다면?"],
        answers: ['그래, 나 재능있지!', ['내가 열심히 했다는 걸 모르고', <br />, '그냥 재능 때문이라고 생각하다니']],
    },
    {
        category: 'T/F',
        question: '친구와의 약속에 늦었다면?',
        answers: ['우선 늦은 이유를 명확하게 설명해야지', '우선 사과부터 해야겠어'],
    },
    {
        category: 'J/P',
        question: ['오랜만에 휴가를', <br />, '계획한다면?'],
        answers: ['여행 일정표처럼 상세하게 계획된 스케줄이 좋아', '그때그때의 기분과 상황에 따라 결정하는 게 좋아'],
    },
    {
        category: 'J/P',
        question: '당신의 방을 둘러본다면?',
        answers: [
            '항상 모든 물건이 정해진 자리에 있어야 마음이 편해',
            ['조금 지저분해도', <br />, '필요한 것들은 잘 찾아낼 수 있어'],
        ],
    },
    {
        category: 'J/P',
        question: ['주말에 무작정 차를 타고', <br />, '드라이브를 간다면?'],
        answers: [
            '그래도 대략적인 목적지나 계획은 세워두고 싶어',
            ['마음 가는 대로 운전하며', <br />, '길 위에서의 새로운 발견을 즐기겠어'],
        ],
    },
];
// 질문리스트 끝

// ProgressBar 시작
const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    const width = (current / total) * 100;

    return (
        <div className="relative h-3 bg-gray-200 rounded-full mt-10 lg:mb-20 xs:mb-10 w-[80%]">
            {Array(total)
                .fill(null)
                .map((_, i) =>
                    i !== total - 1 ? (
                        <div
                            key={i}
                            style={{ left: `calc(${((i + 1) / total) * 100}% - ${5 - 1}%)` }}
                            className={`absolute top-[30%] transform -translate-x-half w-[5px] h-[5px] bg-gray-400 rounded-full z-10 transition-all duration-[1000ms]
                    `}
                        ></div>
                    ) : null
                )}

            <div
                style={{ width: `${width}%` }}
                className="h-full bg-custom-pink rounded-full z-20 absolute top-half transform -translate-y-half transition-all duration-500	"
            >
                {current > 0 && (
                    <div
                        style={{ right: 3 }}
                        className={`absolute top-[25%] transform -translate-x-half w-[5px] h-[5px] border-white border-solid border-opacity-[0.8] border-[3px] rounded-full z-30 transition-all duration-[500ms]
                    `}
                    >
                        <div className="w-full h-full absolute top-half left-half transform -translate-x-half -translate-y-half bg-custom-pink rounded-full"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
// ProgressBar 끝

const Main: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    const navigate = useNavigate();

    const handleAnswer = (category: Question['category'], answer: Answer) => {
        setQuestions((prev) => [...prev, { category, answer }]);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    const calculateResultId = (): number => {
        const counts: Record<string, number> = questions.reduce(
            (acc, question) =>
                question.answer === 1
                    ? {
                          ...acc,
                          [question.category[0]]: (acc[question.category[0]] || 0) + 1,
                      }
                    : acc,
            {}
        );

        let result = '';
        result += counts.E >= 2 ? 'E' : 'I';
        result += counts.T >= 2 ? 'T' : 'F';
        result += counts.J >= 2 ? 'J' : 'P';

        // 변환된 문자열 값을 숫자 ID 값으로 매핑
        const resultMap = {
            ETJ: 0,
            ETP: 1,
            EFJ: 2,
            EFP: 3,
            ITJ: 4,
            ITP: 5,
            IFJ: 6,
            IFP: 7,
        };

        return resultMap[result];
    };

    if (currentQuestionIndex >= questionsData.length) {
        const resultId = calculateResultId();
        navigate(`/result/${resultId}`); // 결과 페이지로 이동
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-[80vh]  ">
            <ProgressBar current={currentQuestionIndex + 1} total={questionsData.length} />

            <div className="w-[330px] h-[200px] backdrop-blur rounded-3xl absolute lg:top-56 xs:top-[282px]">
                <div className=" rounded-lg relative top-2  py-10">
                    <div className="text-center  font-custom1 ">
                        <div className="inline-block bg-gray-200 px-3 py-1 rounded-lg  text-center break-keep ">
                            <p className="text-base text-center inline-block ">
                                {currentQuestionIndex + 1}/{questionsData.length}
                            </p>
                        </div>
                    </div>
                    <p className="flex justify-center text-2xl text-center mt-4 mx-3 font-custom1">
                        {questionsData[currentQuestionIndex].question}
                    </p>
                </div>
            </div>
            {currentQuestionIndex < questionsData.length ? (
                <div style={{ marginTop: 'auto' }} className="w-full max-w-md  ">
                    {questionsData[currentQuestionIndex].answers.map((answerText, i) => (
                        <div key={i} className="mb-2  break-keep">
                            <button
                                onClick={() =>
                                    handleAnswer(
                                        questionsData[currentQuestionIndex].category as Question['category'],
                                        (i + 1) as Answer
                                    )
                                }
                                className="w-full px-6 h-16 text-white bg-custom-black2 rounded-xl top-300 font-custom2  break-keep"
                            >
                                {' '}
                                {answerText}{' '}
                            </button>{' '}
                        </div>
                    ))}{' '}
                </div>
            ) : null}
        </div>
    );
};
export default Main;

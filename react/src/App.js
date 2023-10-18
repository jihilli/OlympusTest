import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Intro.tsx';
import Main from './Main.tsx';
import Result from './Result.tsx';

function App() {
    const kakaoApiKey = process.env.REACT_APP_KAKAOSHARE_KEY;
    // init 체크
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(kakaoApiKey);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/result/:id" element={<Result />} />
                <Route path="/" element={<Intro />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;

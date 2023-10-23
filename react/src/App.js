import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Intro.tsx';
import Main from './Main.tsx';
import Result from './Result.tsx';
import Header from './layout/Header.tsx';
import Footer from './layout/Footer.tsx';

function App() {
    const KakaoApiKey = process.env.REACT_APP_KAKAOSHARE_KEY;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.onload = () => {
            window.Kakao.init(KakaoApiKey);
        };
        document.head.appendChild(script);
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/result/:id" element={<Result />} />
                <Route path="/" element={<Intro />} />
                <Route path="/main" element={<Main />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

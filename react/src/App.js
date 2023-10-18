import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Intro.tsx';
import Main from './Main.tsx';
import Result from './Result.tsx';

function App() {
    // init 체크
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('673fadfd864c9befed1ea1d0b212e8e2');
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

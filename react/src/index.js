import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
} else {
    ReactDOM.render(<App />, rootElement);
}

reportWebVitals();

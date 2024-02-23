import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tabbar from './components/tab-bar.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tabbar />
    <div>mock tab bar</div>
    <App />
  </React.StrictMode>
);

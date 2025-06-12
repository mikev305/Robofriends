import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import CardList from './components/CardList.jsx'
import App from './containers/App.jsx';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker.jsx';

import './containers/App.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

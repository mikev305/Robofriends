import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import CardList from './components/CardList'
import App from './containers/App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

import './containers/App.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

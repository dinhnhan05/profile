import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { inject } from '@vercel/analytics'; 
inject();

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Search } from './components/Search';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
    <App/>
  </React.StrictMode>
);

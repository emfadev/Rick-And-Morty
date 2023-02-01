import React from 'react';
import ReactDOM from 'react-dom/client';
import { Search } from './components/Search';
import { App } from './App';
import { CharacterList } from './components/CharacterList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
    <App/>
    <CharacterList/>
  </React.StrictMode>
);

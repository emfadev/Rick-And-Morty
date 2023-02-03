import React from 'react';
import ReactDOM from 'react-dom/client';
import { Search } from './components/Search';
import { CharacterList } from './components/CharacterList';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Search/>
    <CharacterList/>
  </React.StrictMode>
);
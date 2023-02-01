import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card';
import { Layout } from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Card />
    </Layout>
  </React.StrictMode>
);
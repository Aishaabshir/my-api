import React from 'react';
import ReactDom from 'react-dom/client';
import Head from './component/Head';
import './style.css';
const root= ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Head />
)
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';

// const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
  return (
    <App />
  )
}

render(<Root/>, document.querySelector('#main'));

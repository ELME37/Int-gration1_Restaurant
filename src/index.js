import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';
import { GlobalStyle } from './assets/styles/globalStyles.styled';
import LayoutDefault from './container/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <LayoutDefault>
      <Router />
    </LayoutDefault>
  </BrowserRouter>
);
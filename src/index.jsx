/* eslint-disable no-undef */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import Pages from './pages/index';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
   
  </QueryClientProvider>,
  document.getElementById('root')
);

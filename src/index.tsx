import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from 'components/App/AppContainer';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'core/api';
import 'global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);

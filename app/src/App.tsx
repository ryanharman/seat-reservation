import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

const queryClient = new QueryClient();

function Pages() {
  // TODO: Pages that aren't public need to be out of render scope when authentication hook returns false
  // TODO: Create auth hook / context / store
  return (
    <Routes>
      {routes.map((page, idx) => (
        <Route path={page.route} element={page.element} key={idx} />
      ))}
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Pages />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

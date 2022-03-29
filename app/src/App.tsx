import { Modal } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

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
      <Pages />
    </BrowserRouter>
  );
}

export default App;

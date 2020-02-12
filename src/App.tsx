import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Suspense fallback={<div> Loading viewport... </div>}>
        <Route path='/' component={lazy(() => import('./BookList'))} />
      </Suspense>
    </>
  );
};

export default App;

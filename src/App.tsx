import React from 'react';

import Header from './components/header/header';
import PageMain from './components/page-main/page-main';

const App = () => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <PageMain />
    </div>
  );
};

export default App;

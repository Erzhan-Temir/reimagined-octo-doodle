import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import Header from './components/header/header';
import PageMain from './components/page-main/page-main';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="page page--gray page--main">
        <Header />
        <PageMain />
      </div>
    </Provider>
  );
};

export default App;

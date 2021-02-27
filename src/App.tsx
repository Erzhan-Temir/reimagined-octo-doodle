import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import PageMain from './components/page-main/page-main';
import PageDetails from './components/page-details/page-details';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));

// https://github.com/piotrwitek/react-redux-typescript-guide/blob/e0532ae099a1ddcce7cf263280e20714c7a53e72/playground/src/hoc/with-connected-count.tsx#L13
// https://github.com/Alisa-Filatova/Six-cities/tree/master/src/components/page-wrapper
// https://redux.js.org/recipes/usage-with-typescript#type-checking-middlewares


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={PageMain} />
          <Route
            path="/:id"
            component={PageDetails}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

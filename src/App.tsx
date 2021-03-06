import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import PageMain from './components/page-main/page-main';
import PageDetails from './components/page-details/page-details';
import PageLogIn from './components/page-log-in/page-log-in';
import PageFavorites from './components/page-favorites/page-favorites';
import {rootReducer} from './reducers/root-reducer';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={PageMain} />
          <Route exact path="/login" component={PageLogIn} />
          <Route exact path="/favorites" component={PageFavorites} />
          <Route
            exact
            path="/:id"
            component={PageDetails}
          />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

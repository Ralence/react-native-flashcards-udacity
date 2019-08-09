import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/reducers';

import { AppNavigation } from './Navigation/config';
import AppStatusBar from './Components/StatusBar/AppStatusBar';
import { setLocalNotification } from './utils/notifications';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  componentDidMount() {
    // Notification removed in QuizSummary.js
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <AppStatusBar backgroundColor="#006cfa" />
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;

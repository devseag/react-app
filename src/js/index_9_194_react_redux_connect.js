import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
// import {inc, dec, rnd} from './actions';
// import * as actions from './actions';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer);

// const {dispatch, subscribe, getState} = store;

// const {inc, dec, rnd}= bindActionCreators(actions, dispatch);

// const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// }

// update();
// subscribe(update);

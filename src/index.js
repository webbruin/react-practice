//newsApp
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import RouterConfig from './routerConfig';
import defaultState from './store/state';
import reducer from './store/reducer';
const store=createStore(reducer,defaultState);

ReactDom.render(
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
);



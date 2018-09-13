import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './containers/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';

/* eslint-disable no-underscore-dangle */
const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 4,
  languageName: 'React' }
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

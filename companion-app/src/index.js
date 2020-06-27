import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './Main/Main';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Leave unregistered for development.
serviceWorker.unregister();

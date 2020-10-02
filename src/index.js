import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import swDev from './serviceworkerDev'
import InfiniteLoopLoader from './components/infiniteLoopLoader/InfiniteLoopLoader'
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer'

import "./i18n";


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<InfiniteLoopLoader />}>
        <App />
      </Suspense>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();

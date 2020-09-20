import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import swDev from './serviceworkerDev'
import InfiniteLoopLoader from './components/infiniteLoopLoader/InfiniteLoopLoader'

import "./i18n";


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<InfiniteLoopLoader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev();

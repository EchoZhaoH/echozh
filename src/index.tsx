import React from 'react';
import ReactDOM from 'react-dom';
import { RoutesMap } from './route';

import "@style/theme.scss"

ReactDOM.render(
  <React.StrictMode>
    <RoutesMap />
  </React.StrictMode>,
  document.getElementById('root')
);


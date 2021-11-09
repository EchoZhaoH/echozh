import React from 'react';
import ReactDOM from 'react-dom';

import "@style/theme.scss"
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import "highlight.js/styles/github.css"

import { RoutesMap } from './route';

ReactDOM.render(
  <React.StrictMode>
    <RoutesMap />
  </React.StrictMode>,
  document.getElementById('root')
);


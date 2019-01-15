import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/global-styles.css';
import './css/padding-and-margins.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Router />, document.querySelector('#main'));
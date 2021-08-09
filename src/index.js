import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ABOH from './ABOH'
import HLA from './HLA'
import HDFN from './HDFN'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = "/" component = {App} />
            <Route exact path = "/ABO" component = {ABOH} />
            <Route exact path = "/HLA" component = {HLA} />
            <Route exact path = "/HDFN" component = {HDFN} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

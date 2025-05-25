import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './BaseLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ABOH from './ABOH';
import HLA from './HLA';
import HDFN from './HDFN';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/ABO" element={<ABOH />} />
          <Route exact path="/HLA" element={<HLA />} />
          <Route exact path="/HDFN" element={<HDFN />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BaseLayout } from './components/BaseLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ABOH } from './components/ABOH/ABOH';
import { HLA } from './components/HLA/HLA';
import { HDFN } from './components/HDFN/HDFN';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/ABO" element={<ABOH />} />
          <Route path="/HLA" element={<HLA />} />
          <Route path="/HDFN" element={<HDFN />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
);

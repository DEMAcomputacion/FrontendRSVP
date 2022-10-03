import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import { Route, Routes } from "react-router";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store';

import './index.css';
import 'bootswatch/dist/minty/bootstrap.min.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

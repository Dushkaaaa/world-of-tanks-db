import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Modules/HomePage/HomePage';
import { ListVehicle } from './Modules/ListVehicle/ListVehicle';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="vehicle" element={<ListVehicle />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

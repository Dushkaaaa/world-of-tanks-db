import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './Modules/HomePage/components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />

      <Outlet />
    </div>
  );
};

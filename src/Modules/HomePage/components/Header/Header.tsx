import React from 'react';
import style from './Header.module.scss';
import { Menu } from '../Menu/Menu';

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>World of Tanks - DB</h1>

      <Menu />
    </div>
  );
};

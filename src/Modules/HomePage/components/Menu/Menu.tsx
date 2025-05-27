import React from 'react';
import style from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <div className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to={'/'} className={style.link}>
            Home
          </NavLink>
        </li>

        <li className={style.item}>
          <NavLink to={'vehicle'} className={style.link}>
            List of Tanks
          </NavLink>
        </li>

        <li className={style.item}>
          <a href="#" className={style.link}>
            List of Clans
          </a>
        </li>

        <li className={style.item}>
          <a href="#" className={style.link}>
            List of Players
          </a>
        </li>
      </ul>
    </div>
  );
};

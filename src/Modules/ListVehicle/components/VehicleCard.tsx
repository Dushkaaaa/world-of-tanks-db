import React from 'react';
import style from './VehicleCard.module.scss';
import { Vehicle } from '@/types/type';

type VehicleCardProps = {
  filteredTier: Vehicle[];
};

export const getRomanTier = (tier: number) => {
  const roman = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];

  return roman[tier] || tier;
};

export const VehicleCard: React.FC<VehicleCardProps> = ({ filteredTier }) => {
  return (
    <div className={style.container}>
      {filteredTier.map(item => (
        <div
          key={item.tank_id}
          className={item.is_premium ? `${style.ispremium}` : `${style.card}`}
        >
          <div className={style.cardContent}>
            <div className={style.title}>
              <h2>{item.name}</h2>
              <p className={style.levelTank}>{getRomanTier(item.tier)}</p>
            </div>
            <img src={item.images.big_icon} alt="tank" className={style.img} />
          </div>
          <p className={style.nation}>{item.nation}</p>
        </div>
      ))}
    </div>
  );
};

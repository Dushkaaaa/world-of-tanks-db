import React, { useEffect, useState } from 'react';
import style from './ListVehicle.module.scss';
import { Vehicle } from '@/types/type';
import { fetchVehicle } from '@/fetchApi/fetchVehicle';
import { getRomanTier, VehicleCard } from './components/VehicleCard';
import { DropdownList } from '@/components/DropdownList/DropdownList';

const tierOption: string[] = [
  'All',
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

const nationOptions = [
  'All',
  'ussr',
  'germany',
  'usa',
  'france',
  'uk',
  'japan',
  'china',
  'czech',
  'sweden',
  'poland',
  'italy',
];

export const ListVehicle: React.FC = () => {
  const [vehicle, setVehicle] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [selectedNation, setSelectedNation] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchVehicle();

        setVehicle(Object.values(data));
      } catch {
        throw new Error('Error loading data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredTier = vehicle.filter(veh => {
    const tierMatch =
      !selectedTier || selectedTier === 'All'
        ? true
        : getRomanTier(veh.tier) === selectedTier;

    const nationMatch =
      !selectedNation || selectedNation === 'All'
        ? true
        : veh.nation === selectedNation;
    const searchMatch = veh.name.toLowerCase().includes(search.toLowerCase());

    return tierMatch && searchMatch && nationMatch;
  });

  return (
    <div className={style.container}>
      <h1 className={style.title}>Vehicle List</h1>
      {isLoading ? (
        <div className={style.loading}>Loading...</div>
      ) : (
        <>
          <div className={style.options}>
            <div>
              <p className={style.optionTitle}>Level</p>
              <DropdownList
                tierOption={tierOption}
                selectedTier={selectedTier}
                setSelectedTier={setSelectedTier}
              />
            </div>

            <div>
              <p className={style.optionTitle}>Nation</p>
              <DropdownList
                tierOption={nationOptions}
                selectedTier={selectedNation}
                setSelectedTier={setSelectedNation}
              />
            </div>

            <div>
              <p className={style.optionTitle}>Serch tank</p>
              <input
                type="text"
                className={style.serch}
                placeholder="Enter name tank"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className={style.vehicleItems}>
            <VehicleCard filteredTier={filteredTier} />
          </div>
        </>
      )}
    </div>
  );
};

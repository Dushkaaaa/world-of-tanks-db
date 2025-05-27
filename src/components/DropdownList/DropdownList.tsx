import React, { useEffect, useRef, useState } from 'react';
import style from './DropdownList.module.scss';

type DropListProps = {
  tierOption: string[];
  setSelectedTier: (tier: string) => void;
  selectedTier: string | null;
};

export const DropdownList: React.FC<DropListProps> = ({
  tierOption,
  setSelectedTier,
  selectedTier,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={style.dropdown} ref={dropdownRef}>
      <button
        className={style.dropbtn}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selectedTier || tierOption[0]}
      </button>
      {isOpen && (
        <div className={style.dropdownContent}>
          {tierOption.map(option => (
            <p
              key={option}
              onClick={() => {
                setSelectedTier(option);
                setIsOpen(false);
              }}
              className={style.dropdownItem}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

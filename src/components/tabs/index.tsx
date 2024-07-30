import React from 'react';
import style from './Tabs.module.scss';
import foodSelIcon from '../../assests/logos/food.svg'
import foodIcon from '../../assests/logos/food-white.svg'
import natureSelIcon from '../../assests/logos/nature.svg'
import natureIcon from '../../assests/logos/nature-white.svg'
import cultureIcon from '../../assests/logos/food.svg'
import festivalIcon from '../../assests/logos/food.svg'

export interface TabsProps {
  selected: string | undefined;
  setSelected: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ selected, setSelected }) => {
  const tabs = [
    { text: 'Festivals',icon:foodIcon,iconSelected:foodSelIcon},
    { text: 'Food',icon:foodIcon,iconSelected:foodSelIcon },
    { text: 'Culture',icon:foodIcon,iconSelected:foodSelIcon },
    { text: 'Nature',icon:natureIcon,iconSelected:natureSelIcon },
  ];

  return (
    <ul className={style.cont}>
      {tabs.map((tab, id) => (
        <li
          key={`${tab.text}_${id}`}
          className={`${style.tab} ${selected === tab.text ? style.selected : ''}`}
          onClick={() => setSelected && setSelected(tab.text)}
        >
            <img
            src={selected === tab.text ? tab?.iconSelected : tab?.icon}
            className={style.icon}
            alt='tab-icon'
            />
          {tab.text}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;

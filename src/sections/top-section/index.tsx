import React, { useState ,ReactNode} from 'react';
import  Tabs  from "../../components/tabs";
import style from './TopSection.module.scss';

export interface TopSectionProps {
  img?: string;
  title: string;
  button?:ReactNode;
}

const TopSection: React.FC<TopSectionProps> = ({ img, title, button }) => {
  const defaultImg = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt592c0e4e8a0b1271/641347cc0c29c7363bf394b2/Vatican_Desktop.jpg?auto=webp&quality=60';
  const [selectedTab, setSelectedTab] = useState<string>('Food');

  return (
    <div className={style.cont}>
      <img
        className={style.coverImg}
        src={img || defaultImg}
        alt="cover-img"
      />
      {title && (
        <div className={style.contAbsolute}>
          <p className={style.title}>{title}</p>
          {button}
        </div>
      )}
      <Tabs selected={selectedTab} setSelected={setSelectedTab}/>
    </div>
  );
};

export default TopSection;

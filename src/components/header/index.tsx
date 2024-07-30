import React from 'react'
import style from './Header.module.scss';
import Flexbox from '../flexbox';

export interface HeaderProps {
    logo?:string
    options?: { text: string; href: string }[];
}
function Header({logo,options}:HeaderProps) {
  return (
    <div className={style.cont}>
        <Flexbox 
        style={{justifyContent:'space-between',alignItems:'center'}}
        >
            <div className={style.contLeft}>
                <a 
                className={style.float} 
                href='#'
                >
                    <img 
                    src={logo}
                    width={40}
                    height={30}
                    alt='company-logo'
                    />
                </a>
            </div>
            <div className={style.contMiddle}>
                    {options?.map((option,id)=>(
                        <a 
                        key={`${option}_${id}`}
                        href={option.href}
                        className={style.text}>
                            {option.text}
                        </a>
                    ))}
            </div>
            <div className={style.contRight}>
                <a
                href='tel:+7972938801'
                className={style.link}
                >
                    +7972938801
                </a>
            </div>
        </Flexbox>
    </div>
  )
}

export default Header
import React from 'react'
import style from './TripLine.module.scss';
export interface TripLineProps{
    content:{text:string,icon?:string}[]
}
function TripLine({content}:TripLineProps) {
  return (
    <div className={style.tripLineCont}>
        {content?.map((item)=>(
            <div key={item.text} className={style.contInner}>
                {item?.icon &&
                <img
                src={item.icon}
                alt='icon'
                width={16}
                height={16}
                />
                }
                <div className={style.text}>{item.text}</div>
            </div>
        ))}
    </div>
  )
}

export default TripLine
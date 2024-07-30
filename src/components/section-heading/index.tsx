import React from 'react'
import style from './SectionHeading.module.scss';

export interface SectionHeadingProps{
    title:string,
    subtitle?:string
}
function SectionHeading({title,subtitle}:SectionHeadingProps) {
  return (
    <div className={style.headingCont}>
        <h2 className={style.title}>
            {title}
        </h2>
        {subtitle &&
        <h3 className={style.subtitle}>
            {subtitle}
        </h3>}
    </div>
  )
}

export default SectionHeading
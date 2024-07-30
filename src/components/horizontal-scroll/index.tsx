import React from 'react'
import style from './HorizontalScroll.module.scss';
import SectionHeading from '../section-heading';
import ImageCarousel from '../image-carousel';

export interface HorizontalScrollProps{
    title:string,
    subtitle?:string,
    childrean?:any
}
function HorizontalScroll({title,subtitle,childrean}:HorizontalScrollProps) {
  return (
    <div>
        <SectionHeading 
      title={title}
      subtitle={subtitle||''}
      />
      <div className={style.scrollingWrapper}>
        
        <div className={style.card}>
            <ImageCarousel/>
        </div>
        <div className={style.card}>Card</div>
        <div className={style.card}>Card</div>
        <div className={style.card}>Card</div>
        <div className={style.card}>Card</div>
      </div>
    </div>
  )
}

export default HorizontalScroll
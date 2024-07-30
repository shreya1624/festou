import React,{useCallback, useEffect, useState} from 'react'
import style from './ImageCarousel.module.scss';
import { url } from 'inspector';

const images = [
    { src: 'https://images.blacktomato.com/2022/09/Tuscany-and-Amalfi-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.1&q=82&w=819&s=a98b97094e16630a86aa539de9a4a6ae',
     alt: 'Los Angeles',
     place: 'Los Angeles',
     package:'A luxury Tuscany and Amalfi Coast holiday'
     },
    { src: 'https://images.blacktomato.com/2022/09/Ancient-traditions-and-modern-worlds-1-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.1&q=82&w=575&s=3b91a5fa46c7c5eed0d8b4adee256a6a', 
    alt: 'Chicago' ,
    place: 'Chicago' ,
    package:'A luxury Tuscany and Amalfi Coast holiday: La… A luxury Tuscany and Amalfi Coast holiday: La…'
  },
    { src: 'https://images.blacktomato.com/2023/10/Morocco-palm-trees-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.1&q=82&w=686&s=d7a8f987286a1a516483b2927b54a0d8', 
    alt: 'New York',
    place: 'New York',
  },
  ];
  
  export interface ImageCarouselProps{
    content?:{src:string,alt:string}[],
  }
  const ImageCarousel = ({content}:ImageCarouselProps) => {
    const [cur, setCur] = useState(0);
  
    const len = images.length;

  
    const rightHandle = useCallback(() => {
      setCur(cur + 1 > len - 1 ? 0 : cur + 1);
    }, [cur, len]);
  
    // useEffect(() => {
    //   const interval = setTimeout(() => {
    //     rightHandle();
    //   }, 3000);
    //   return () => clearTimeout(interval);
    // }, [rightHandle]);
  
    return (
      <>  
        {images?.map((slide, index) => {
          return (
            <div className={style.carouselCont} key={index}>
              {cur === index && 
              <>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div className={style.textCont}>
                    <p className={style.name}>{slide.place}</p>
                    {slide.package &&
                      <div className={style.package}>{slide.package}</div>
                    }
                  </div>
              </div>                              
               </>
              }
              <div className={style.dotCont}>
                {images?.map((img,index)=>(
                  <div 
                  key={img.alt}
                  style={{backgroundColor:cur === index? '#fff': '#545454'}}
                  className={style.dot}
                  onClick={()=>setCur(index)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  

export default ImageCarousel
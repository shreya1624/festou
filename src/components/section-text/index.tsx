import React,{useState} from 'react'
import style from './SectionText.module.scss';
import { truncateText } from '../../helper';

function SectionText({text}:{text:string}) {
    const [readMore, setReadMore] = useState<boolean>(false)
     let truncatetext= readMore ? text : truncateText(text,380)
     console.log('tt',text.length)
  return (
    <div>
    <h4 className={style.text}>{truncatetext}</h4>
    {text.length>380 &&
        <a className={style.link} onClick={()=>setReadMore(!readMore)}>
            Read {readMore ? 'Less' : 'More'}
        </a>
    }
    </div>
  )
}

export default SectionText
import React from 'react'
import style from './TripPage.module.scss';
import Header from '../../components/header';
import TripLine from '../../components/trip-line';
import iconPlace from '../../assests/logos/place.svg'
import iconTime from '../../assests/logos/clock.svg'
import iconDate from '../../assests/logos/calendar.svg'
import SectionHeading from '../../components/section-heading';
import SectionText from '../../components/section-text';
function TripPage() {
    let img='https://images.blacktomato.com/2022/09/Tuscany-and-Amalfi-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.1&q=82&w=819&s=a98b97094e16630a86aa539de9a4a6ae';
    let tripLine =[
        {text:'3 Hours 30 minutes',icon:iconTime},
        {text:'Surla, Goa',icon:iconPlace},
        {text:'Aug 13th',icon:iconDate},
    ]
    let text='Take a self-guided audio tour onboard the world’s longest-serving aircraft carrier, the historic USS Midway. See the carrier’s 25 restored aircraft from the days of WWII to Operation Desert Storm. Visit areas throughout the Midway, from the crews sleeping quarters to the pilots ready rooms Take a self-guided audio tour onboard the world’s longest-serving aircraft carrier, the historic USS Midway. See the carrier’s 25 restored aircraft from the days of WWII to Operation Desert Storm. Visit areas throughout the Midway, from the crews sleeping quarters to the pilots ready rooms.    '
    let highlight = [
        'Skip the line using your mobile ticket and proceed directly to the front gate',
        'Skip the line using your mobile ticket and proceed directly to the front gate',
        'Skip the line using your mobile ticket and proceed directly to the front gate',
        'Experience simulators and short films that give you the chance to relive famous moments',
        'Experience simulators and short films that give you the chance to relive famous moments'
    ]
  return (
    <div>
        <div
        className={style.background}
        style={{ backgroundImage: `url(${img})` }}
        >
        </div>
        <div className={style.cont}>
            <div className={style.leftCont}>
                <TripLine content={tripLine}/>
                {/**Description */}
                <div>
                    <SectionHeading title='Description'/>
                    <SectionText text={text}/>
                </div>
                <div className={style.line}/>
                {/**HighLight */}
                <div>
                    <SectionHeading title='Highlights'/>
                    <ul className={style.highlightCont}>
                        {highlight?.map((item)=>(
                            <li key={item} className={style.highlight}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={style.line}/>
                {/**Includes */}
                <div>
                    <SectionHeading title='Includes / Excludes'/>
                </div>
                <div className={style.line}/>
                {/**Meeting Point */}
                <div>
                    <SectionHeading title='Meeting Point'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripPage
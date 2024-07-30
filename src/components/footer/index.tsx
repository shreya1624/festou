import React from 'react'
import style from './Footer.module.scss';
import youtubeIcon from '../../assests/logos/youtube.svg';
import instaIcon from '../../assests/logos/instagram.svg';
import fbIcon from '../../assests/logos/facebook.svg';
import twitterIcon from '../../assests/logos/twitter.svg';

function Footer() {
    let socials =[
        {
            type:'instagram',
            icon:instaIcon,
            href:'www.instagram.com'
        },
        {
            type:'youtube',
            icon:youtubeIcon,
            href:'www.youtube.com'
        },
        {
            type:'facebook',
            icon:fbIcon,
            href:'www.facebook.com'
        },
        {
            type:'twitter',
            icon:twitterIcon,
            href:'www.twitter.com'
        },
    ]

    let fotterContent=[
        {
            title:'Explore',
            contents:[
                {
                    text:'Trending',
                    onClick:()=>{},
                },
                {
                    text:'Upcoming',
                    onClick:()=>{},
                },
                {
                    text:'Most Liked',
                    onClick:()=>{},
                },
                {
                    text:'Experiences',
                    onClick:()=>{},
                },
            ]
        },
        {
            title:'Blogs',
            contents:[
                {
                    text:'Trending',
                    onClick:()=>{},
                },
                {
                    text:'Upcoming',
                    onClick:()=>{},
                },
                {
                    text:'Most Liked',
                    onClick:()=>{},
                },
                {
                    text:'Experiences',
                    onClick:()=>{},
                },
            ]
        },
        {
            title:'More',
            contents:[
                {
                    text:'About Us',
                    onClick:()=>{},
                },
                {
                    text:'Privacy Policy',
                    onClick:()=>{},
                },
                {
                    text:'Terms and Conditions',
                    onClick:()=>{},
                },
            ]
        },
        {
            title:'Get In Touch',
            contents:[
                {
                    text:'Contact Us',
                    onClick:()=>{},
                },
                {
                    text:'Feedback',
                    onClick:()=>{},
                },
                {
                    text:'Queries',
                    onClick:()=>{},
                },
            ]
        },
    ]
  return (
    <div className={style.footerCont}>
        <div className={style.footerInnerCont}>
        {fotterContent?.map((section)=>(
            <div 
            key={section.title}
            className={style.flexCol}
            >
                <h4 className={style.title}>{section.title}</h4>
                {section?.contents?.map((item)=>(
                    <a
                    key={item.text}
                    className={style.text}
                    onClick={item.onClick}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        ))}
        </div>
        <div className={style.maintext}>
        {/*Connect With Us*/}
        Follow Us On
        </div>
        <ul className={style.socialCont}>
            {socials?.map((item)=>(
                <li key={`${item.type}`}>
                    <a 
                    className={style.link} 
                    href={item.href}>
                        <img 
                        className={style.icon}
                        src={item.icon} 
                        alt={`${item.type}-icon`}/>
                    </a>
                </li>
            ))}
        </ul>
        <div className={style.copyrightCont}>
            &copy; 2024 FesTou | All Rights Reserved
        </div>
    </div>
  )
}

export default Footer
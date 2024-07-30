import React from 'react'
import style from './BlogsPage.module.scss';

function BlogsPage() {
    let img='https://images.blacktomato.com/2022/09/Tuscany-and-Amalfi-scaled.jpg?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.1&q=82&w=819&s=a98b97094e16630a86aa539de9a4a6ae';

  return (
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <div
        className={style.background}
        style={{ backgroundImage: `url(${img})` }}
        >
            <div className={style.headerContInner}>
                <h1 className={style.headerTitle}>Travel Stories</h1>
                <h3 className={style.headerSubtitle}>Offbeat Adventures </h3>
            </div>
        </div>
    </div>
  )
}

export default BlogsPage
import React from 'react'
import Header from '../../components/header'
import TopSection from '../../sections/top-section'
import OutlineButton from '../../components/outline-button'
import HorizontalScroll from '../../components/horizontal-scroll'
import Footer from '../../components/footer'
import logo from '../../assests/logos/logo.svg';

function LandingPage() {
    let headerOptions=[
        {
          text:'Home',
          href:'#'
        },
        {
          text:'Blogs',
          href:'#'
        },
        {
          text:'Gallery',
          href:'#'
        },
      ]
  return (
    <div>
        <Header 
      logo={logo}
      options={headerOptions}
      />
      <TopSection
      title='Travel unites us'
      button={
        <OutlineButton
        btnText='Get In Touch'
        onClickBtn={()=>{}}
        />
      }
      />
      <div className="main-container">
        <HorizontalScroll
        title='Upcoming Festivala'
        />
      </div>
    </div>
  )
}

export default LandingPage
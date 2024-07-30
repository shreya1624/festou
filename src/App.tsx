import React from 'react';
import './App.css';
import Header from './components/header';
import TopSection from './sections/top-section';
import OutlineButton from './components/outline-button';
import Footer from './components/footer';
import SectionHeading from './components/section-heading';
import HorizontalScroll from './components/horizontal-scroll';
import ImageCarousel from './components/image-carousel';
import Modal  from './components/modal';
import Input from './components/form-flow/input';
import LandingPage from './pages/landing-page';
import BlogsPage from './pages/blogs-page';
import TripPage from './pages/trip-page';
function App() {
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
    <div className="App">
              <Header options={headerOptions}/>
      {/* <LandingPage/> */}
      {/* <BlogsPage/> */}
      <TripPage/>
      <Footer/>
      {/* <Modal title='Get a Quote' >
        <div>Shreya</div>
        <Input placeholder='First Name' label='First Name' value=''/>
      </Modal> */}
    </div>
  );
}

export default App;

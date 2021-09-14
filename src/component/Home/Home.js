import React from 'react';
import Category from '../Category/Category';
import SlideShow from '../header/SlideShow';
import Info from '../infoSection/Info';
import FarGallery from './farGallery/FarGallery';
import Footer from './footer/Footer';
import Review from './Review/Review';
import Subscribe from './subscribe/Subscribe';
import TrandingItem from './TrandingItem';
// import Header from '../header/Header';

const Home = () => {
    return (
        <div>
          {/* <Header/> */}
          <SlideShow/>
          <Info/>
          <Category/>
          <TrandingItem/>
          <FarGallery/>
          <Review/>
          <Subscribe/>
          <Footer/>
        </div>
    );
};

export default Home;
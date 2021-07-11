import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home(){
    return (
        //main home page which displays 3 components
        <div>
        <HeroSection/>
        <Cards/>
        <Footer/>
         </div>
    );
}
export default Home;

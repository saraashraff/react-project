import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>

        {/* button that goes to the sign-up page */}
        <Link to="/sign-up">
          <Button 
          variant="outline-warning"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </Link>

        {/* button that goes to the artist search page */}
        <Link to="/search">
          <Button
          variant="dark"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            SEARCH ARTIST 
          </Button>
       </Link>


        

      </div>
    </div>
  );
}

export default HeroSection;
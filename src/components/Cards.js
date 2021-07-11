import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

//component which displays random information through cards on the home page
function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT THE UPCOMING EVENTS</h1>

      <br/>
      <br/>
     
     {/* first row has 2 cards */}
      <div class="row">
        <div class="col-sm-6">
        <CardItem
            src='videos/concert-video-1.mp4'
            text="Don't miss out Maroon 5's US Show!"
            path='/services'
          />
          
        </div>
        <div class="col-sm-6">
        <CardItem
            src='videos/concert-video-2.mp4'
            text='Why does music sound better late at night?'
            path='/services'
          />
        </div>
      </div>

      <br></br>
      <br></br>


      {/* second row has 3 cards */}
      <div class="row">
        <div class="col-sm-4">
        <CardItem
            src='videos/concert-video-3.mp4'
            text='keep calm and sing with the crowd'
            path='/services'
          />
        </div>
        <div class="col-sm-4">
        <CardItem
            src='videos/concert-video-4.mp4'
            text='Put your hands up in the air'
            path='/search-artist'
          />
        </div>
        <div class="col-sm-4">
        <CardItem
            src='videos/concert-video-5.mp4'
            text='stunning vocals'
            path='/sign-up'
          />
        </div>
      </div>


    </div>
  );
}

export default Cards;
import React, {Component} from 'react';
import { Navbar, Nav, Container, Form, NavLink, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class SearchArtist extends Component {

  //binding the functions in constructor
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  //defining functions to be used in the input field
  onChange(e) {
    this.props.onChange(e.target.value);
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      this.props.onKeyDown();
    }
  }


  render()
  {
    return (
      <div>
    <div className='hero-container'>
      <video src='/videos/video-6.mp4' autoPlay loop muted />

      <h1>MUSIC IS THE ANSWER.</h1>
      <p>Let the Artist Speak!</p>
      <div className='hero-btns'>

      <div className="">

          <input type="text" placeholder="Search Artist" class="form-group" 
          onChange={this.onChange}
          onKeyDown={this.onKeyPress} />

          <Button 
            variant="outline-warning"
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
          SEARCH
        </Button>        
      </div> 
      </div>
    </div>    
    </div>
    );
  }
    
  }
  
  export default SearchArtist;
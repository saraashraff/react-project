import React , {Component} from 'react';
import './Register.css';
// import './HeroSection.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";




class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="background-img">
                <div className = "register">
                <h1>PLEASE REGISTER YOURSELF</h1>

            {/* form that inputs users credentials for logging in */}
                <form>

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <Button 
                        type="submit"
                        variant="outline-warning"
                        className='btns d-flex justify-content-center'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                            SIGN IN
                        </Button>

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        
                    </form>
            
                </div>
            </div>
        </div>
         );
    }
}
 
export default Register;
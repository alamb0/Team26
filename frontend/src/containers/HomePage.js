import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo_image from './swift-logo.png';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
      <Jumbotron>
          <h1 className="display-3"><img className="logo" alt="Logo" src={logo_image}/></h1>
          <p className="lead">Welcome to our volunteer communication portal. Please Register to volunteer for the Swift Youth Foundation.</p>
          <p className="lead">
          <Link to='/subscribe'>
            <Button color="primary">Volunteer</Button>
          </Link>
          </p>
      </Jumbotron>
      <div className="background-image"></div>
      </div>
    );
  }
}

export default HomePage;
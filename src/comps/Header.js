import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return(
            <div className='Header'>
           <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  // <ReactBootStrap.Navbar.Brand href="#home" style={{textAlign: "center"}}></ReactBootStrap.Navbar.Brand> 
  <h1 style={{color: "white",textAlign: "center"}}>Youframe</h1>
  // <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  // <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  // </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

            </div>
        );
    }
}
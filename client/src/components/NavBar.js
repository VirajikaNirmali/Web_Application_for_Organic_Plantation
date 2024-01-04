import React from 'react';
import Logo from "./images/LogoMakr-3GMuef.png";
import './Nav.css';

const Navbar = ({ setShow, size }) => {
  
    return(
 
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {<img src={Logo} width="50" height="50"  />}<a class="navbar-brand" onClick={() => setShow(true)}>Green Lanka</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    
    <ul class="navbar-nav">
    <li class="nav-item ">
      <a class="nav-link " aria-current="page" href="/">Home <span class="sr-only">(current)</span></a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/addnew">Admin</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/viewdeliver">Delivery</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="#">Instructor</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/about">About Us</a></li>
    </ul>
    {/* <ul>
    <div className='cart' >
      <span>
      <i class="fas fa-cart-plus"></i>
      </span>
      <span>
        {size}
      </span>
    </div></ul> */}
    </div>
 
</nav>
)
   
  }

export default Navbar;
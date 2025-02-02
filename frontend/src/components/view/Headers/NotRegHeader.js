import React from 'react'
// import { useState } from 'react';
// import {NavLink,Link,useNavigate} from 'react-router-dom';
// import axios from "axios";
// import swal from "sweetalert";

import './header.css';
import logo from '../../image/cyn.png';



const NotRegHeader = () => {

//const id =localStorage.getItem("id");


return(

    <div className='outdiv'>
       

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img class="logoimg" src={logo} alt="Logo"/>
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/ourproject">Our Project</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/gallery">Gallery</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/aboutus">About Us</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/contactus">Contact Us</a>
                        </li>

                        <button><a href="/signin">Sign In</a></button>
                        <button><a href="/signup">Sign Up</a></button>
                    </ul>
            
                </div>
            </div>
        </nav>

    </div>


)

}

export default NotRegHeader
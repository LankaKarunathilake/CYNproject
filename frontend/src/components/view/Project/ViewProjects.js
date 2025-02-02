import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import './ourprojects.css';


import Header from '../Headers/Header';


const ViewProjects = () => {


return(
    

    <div>
        <Header/>
            <div id="project" className="project">

                {/* <video src={BgVideo} autoPlay muted loop class="video-bg" /> */}
                <div className="bg-overlay"></div>

                <div className="home-text">
                    <h2>Our Projects</h2>
                </div>

                {/* <div id="explore" className="home-btn"><a href="#category">Explore</a></div> */}

                </div>

                <div id="category" className="section-container">
                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Project 01</h3>
                        <p>
                            Applicant User Profile allows you to edit user profiles,
                            search for jobs, apply them, view their statuses and much more.
                        </p>
                        <Link aria-current="page" to={"/"}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Project 02</h3>
                        <p>
                            Applicant User Profile allows you to edit user profiles,
                            search for jobs, apply them, view their statuses and much more.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Project 03</h3>
                        <p>
                            Applicant User Profile allows you to edit user profiles,
                            search for jobs, apply them, view their statuses and much more.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Project 05</h3>
                        <p>
                            Applicant User Profile allows you to edit user profiles,
                            search for jobs, apply them, view their statuses and much more.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                    <div className="sec-card">
                    <div className="card-box">
                        <div className="card-content">
                        <h3>Project 06</h3>
                        <p>
                            Applicant User Profile allows you to edit user profiles,
                            search for jobs, apply them, view their statuses and much more.
                        </p>
                        <Link aria-current="page" to={""}>View</Link>
                        </div>
                    </div>
                    </div>

                </div>
          </div>

)
}

export default ViewProjects
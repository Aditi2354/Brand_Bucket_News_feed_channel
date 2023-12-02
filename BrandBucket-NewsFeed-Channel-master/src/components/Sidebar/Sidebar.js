import React from 'react';
import './Sidebar.css';
import heroImage from '../../images/profile.png';
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, isOpen }) => {


    return (
        <div className="sidebar">
            <div className="sidebar-inside">
                <div className="sidebar-heading">
                    <div className="hero-profile d-flex shadow-lg bg-body rounded">
                        <img src={heroImage} alt="" />
                        <div className="desc text-start ps-3">
                            <h6>Hi Reader</h6>
                            <p>Hers's your News</p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-feedback shadow-lg bg-body rounded mt-3">
                    <h4>View Toggle</h4>
                    <div className="toggle ">

                        <div className="toggle-view d-flex align-items-center">
                            <div className={
                                isOpen
                                ? "grid-view grid-view-tog"
                                :"grid-view"
                            }

                            
                            onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <div className={
                                !isOpen
                                ? "grid-view grid-view-tog"
                                :"tiles-view"
                            }
                            
                            onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sidebar-feedback shadow-lg bg-body rounded mt-3">
                    <h4>Have a Feedback?</h4>
                    <Link to="/feedback">
                        <button className="btn btn btn-success"> We're Listening!</button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default Sidebar;
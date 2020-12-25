import './Nav.css'
import React from "react";
// import NavLink from "react-router-dom/modules/NavLink";
import {NavLink} from "react-router-dom";



let Nav = () => {
    return (
        <nav>
            

            <div className='item'>
                <NavLink to='/profile'>Profile</NavLink>
            </div>

            <div className='item'>
                <NavLink to='/news'>News</NavLink>
            </div>

            <div className='item'>
                <NavLink to='/dialogs'>Dialogs</NavLink>
            </div>

            <div className='item'>
                <NavLink to='/communities'>Communities</NavLink>
            </div>


        </nav>
    )
}


export default Nav;

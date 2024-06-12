import React from 'react';
import './Style.css'
import ProfileButton from './ProfileButton'
import { NavLink } from 'react-router-dom'; // import the NavLink component


export default function NavBar() {

    return (
        
        <nav className='navigation'>
            <NavLink to="/" className={({isActive})=>isActive?" active":""}>Home</NavLink>
        </nav>
        
    );

}
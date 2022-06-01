import React, { useState, useEffect } from 'react'
import logo from './NetflixLOGO.png'
import user from './iconsUSER.png'
import './Nav.css'

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
            handleShow(true);}
            else{
            handleShow(false);}
        });

        return () => {
            window.removeEventListener("scroll",null);
        }
    },[])

    // ${show && "nav_black"}`
  return (
    <div className='navbar' style={show ? { backgroundColor: 'black'} : null}>
        <img src={logo} alt="logo" className='logo'/>
        <img src={user} alt="user" className='user'/>
    </div>
  )
}

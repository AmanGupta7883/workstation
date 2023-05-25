import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import LoginButton from './LoginButton';
import RosNav from './RosNav';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const Navbar = styled.nav`
  font-family: 'Nunito';
  padding:0 1rem;
  display:flex;
  justify-content:space-around;
  
   ul{
    margin-bottom:0;
   }
  .navbar-list{
    display:flex;
    gap:0.5rem;
    align-items:center;
  }
  li{
    list-style:none;
    padding:8px 4px;
    border-radius: 5px;
  &:visited{
    background-color:none;
  }
  }

  .Navbar-links{
    color: #212529;
    text-decoration:none;
    padding:0.5rem 1rem;
    border-radius: 5rem;
    box-shadow: 0px 0px 22px #0000001f;
  }
  .Navbar-links:hoevr
  .mob-nav-icn{
    display:none;
  }
  .Navbar-links{
    &:hover{
      // border-bottom:2px solid ${({ theme }) => theme.colors.black};
      // box-shadow:0 0px 5px #00000057;
      background: #0a1435;
      color: white;
      transition:all 0.4s ease-in-out;
    }
    &:active{
     
    }
  }
  .Navbar-links::active{
    background: #0a1435;
  }
  @media(max-width:${({ theme }) => theme.media.mobile}){
    .navbar-list{
      display:none;
    }
    .navlist{
      display:block;
    }
   }
  `
  return (
    <Navbar>
      <nav className='d-flex align-items-center'>
        <div className="menuIcon">
          <ul className="navbar-list">
            {/* <li><NavLink className="Navbar-links" to="/">Home</NavLink></li> */}
            <li><NavLink className="Navbar-links" to="/about">About</NavLink></li>
            <li><NavLink className="Navbar-links" to="/news">News</NavLink></li>

            {
              isAuthenticated ? (<li><NavLink className="Navbar-links" to="/services">Services</NavLink></li>) : console.log()
            }

            <li><NavLink className="Navbar-links" to="/contact" style={{"marginRight":"1rem"}}>Contact</NavLink></li>
            <LoginButton />
          </ul>

        </div>
      </nav>
      <RosNav />
    </Navbar>
  )
}

export default Navbar
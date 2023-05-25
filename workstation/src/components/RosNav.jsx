import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { FaHamburger, FaTimes } from "react-icons/fa";
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
const RosNav = () => {
    const { isAuthenticated } = useAuth0();
    const [openMenu, setOpenMenu] = useState(false);
    const Wrapper = styled.section`
    display:none;
    @media(max-width:${({ theme }) => theme.media.mobile}){
        display:block;
        z-index:99;

        .Navbar-links{
           color:white;
        }
        .navbar-list{
          display:none;
        }
        .mob-nav-icn{
          display:block;
          z-index:999;
          font-size:2.5rem;
        }
        .clicn {
            width: 100vw;
            text-align: end;
            padding:6px;
        }
        .nav1{
            position:fixed;
            width:100vw;
            height:100vh;
            background-color:white;
            top:0;
            right:0;
        }
        .inactive{
            display:none;
        }
        .active{
            background: #0a1435;
        }
        .navlist {
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .navlist ul{
            width:100%
            display:flex;
            flex-direction:column;
            padding-left:0;
        }
        .navlist ul li{
            text-align:center;
            margin:0.8rem auto;
            font-size:2rem;
            display:block;
        }
        .clsicon{
            dis
        }
        .main img{
            width:12vw;
        }
        .main2{
               display:flex;
               flex-direction:column;
               align-items:center;
               justify-content:space-around;
                background-color:${({ theme }) => theme.colors.bg};
                padding: 1.5rem;
                border-radius: 12px;
                box-shadow: 0 0 8px black;
            
            h2{
                font-size:22px;
                margin-bottom:0;
            }
            p{
                font-size:20px;
                margin-bottom:0;
            }
            Button{
                margin:auto;
                margin-top:1.5rem;
            }
        }
      

    }
    `

    return (
        <Wrapper>
            <FaHamburger className='mob-nav-icn' onClick={() => setOpenMenu(true)} />
            <div className={openMenu ? "nav1 active" : "nav1 inactive"}>
                <div className="clicn">
                    <FaTimes className="clsicon mob-nav-icn" onClick={() => setOpenMenu(false)} style={{ "color": "white" }} />
                </div>
                <div className="navlist">
                    <ul>
                        <li><NavLink className="Navbar-links" onClick={() => setOpenMenu(false)} to="/">Home</NavLink></li>
                        <li><NavLink className="Navbar-links" onClick={() => setOpenMenu(false)} to="/about">About</NavLink></li>
                        <li><NavLink className="Navbar-links" onClick={() => setOpenMenu(false)} to="/news">News</NavLink></li>

                        {
                            isAuthenticated ? (<li><NavLink className="Navbar-links" onClick={() => setOpenMenu(false)} to="/services">Services</NavLink></li>) : console.log()
                        }

                        <li><NavLink className="Navbar-links" onClick={() => setOpenMenu(false)} to="/contact">Contact</NavLink></li>
                        <div className="main2">
                            <LoginButton />
                        </div>
                    </ul>
                </div>
            </div>
        </Wrapper>
    )
}

export default RosNav
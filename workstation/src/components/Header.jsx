import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import logoText from './assets/logoText.png'

const Wrapper = styled.header`
      margin:0px;
      padding:0px;
      box-sizing:border-box;
      width:100%;
      height:80px;
      // background-color: ${({ theme }) => theme.colors.bg};
      background-color: rgb(245 245 245);
      display:flex;  
      justify-content:space-between;
      align-items:center;
      position:fixed;
      padding: 0 0 0 18px;
      z-index:99;
      // box-shadow: ${({ theme }) => theme.colors.shadow};
      // box-shadow: 0px 0px 19px #0000000f;
      .logo{
        width:4vw;
        height:auto;
      }
      .mainLogo{
        display:flex;
        align-items:center;
      }
      .logoName{
        font-weight:600;
        font-family: 'Nunito';
      }
      .upL{
        font-size:1.9rem;
        font-family: 'Nunito';
        color:black;
      }
      .dnL{
        font-size:13px;
      }
      
      @media(max-width:${({ theme }) => theme.media.mobile}){
        .imLTEu{
          border-bottom: 1px solid #0000006e;
        }
      .logo {
        width: 14vw;
        height: auto;
        // margin-top: 1.3rem;
        display:none;
      }
      .logoName{
        // display:none;
      }
      }
    }
       
  `

const Header = () => {
  
  return (
    <Wrapper className="mainHead">
      <div className='mainLogo'>
        <NavLink to="/" className='logo'><img src="/images/logo.png" className='logo' alt="UWS" style={{"paddingRight":"1rem"}} /></NavLink>
        <div className="logoName">
         <NavLink to="/" style={{'textDecoration': 'none'}}> <p className="upL" style={{'textDecoration': 'none',"fontWeight":"1000"}}>WORK STATION </p></NavLink>
          <div className="dnL">A professionals tool kit</div>
        </div>
      </div>
      <Navbar />
    </Wrapper>
  )
}

export default Header;
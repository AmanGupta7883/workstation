import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './Button'
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.footer`
  display:flex;
  flex-direction:column;
  width:100%;
  bottom: 0;
  margin-top:auto;
  padding:13px;
  background-color:${({ theme }) => theme.colors.footer_bg};
  .gridTwo{
    display:none;
  }
   h5{
    margin-bottom:0;
    font-size: 15px;
    font-weight: 600;
   }
  .main{
    display: grid;
    justify-content: center;
    align-items:start;
    grid-gap:5rem;
    grid-template-columns:auto auto auto auto auto;
    padding:2.5rem;
  }
  .logo{
    width:auto;
    height:auto;
    text-align:center;
  }
  .log{
    width:4rem;
  }
  a{
    text-decoration:none;
    color:${({ theme }) => theme.colors.white};
  }
  .mainLogo{
    display:flex;
    flex-direction:column;
    align-items:center;
    color:${({ theme }) => theme.colors.white};
  }
  .logoName{
    font-weight:500;
    text-align:center;
  }
  .upL{
    font-size:1.9rem;
    font-family: 'Nunito';
  }
  .dnL{
    font-size:13px;
  }
  .gridTwo,.gridThr, .gridfou, .gridOn{
    color:${({ theme }) => theme.colors.white};
    text-align:center;
  }
  h2{
    font-weight:500;
    padding-bottom:13px;
    color:${({ theme }) => theme.colors.helper};
  }
  ul{
    margin-bottom:0;
    padding-left:0;
  }
  li{
    list-style:none;
    padding:6px 0;
    font-size:13px;
  }
  .powered{
    text-align:center;
    padding:6px 0px;
    font-size:13px;
    color:${({ theme }) => theme.colors.helper};
  }
  .notify{
    display:flex;
    justify-content:space-around;
  }
  .notibar{
    background-color:${({ theme }) => theme.colors.white};
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
    padding:23px;
    width:70%;
  }
  .sa{
    color:${({ theme }) => theme.colors.white}; 
  }
  Button{
    color:${({ theme }) => theme.colors.white};
  }
  h5{
    color:${({ theme }) => theme.colors.black};
  }
  @media(max-width:${({ theme }) => theme.media.mobile}){
    .mainLogo{
      margin:auto;
    }
    .logo {
      height: auto;
    }
    .main{
      grid-template:none;
      grid-template-rows: auto auto auto auto;
      text-align:center;
      grid-gap:2rem;
    }
    .notify{
      flex-direction:column-reverse;
    }
    .notibar{
      display: flex;
      width: 100%;
      height:5rem;
      margin-bottom: 2rem;
    }
    NavLink{
      text-decoration:none;
    }
  }
  }
  `

const Footer = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <div className="notify">
        <div className="notibar">
          <div className="noti">
            <h5>Ready to get started</h5>
            <h5>Solve your problem</h5>
          </div>
          {
            isAuthenticated ? <NavLink to="/services"><Button>Get Started</Button></NavLink> : <Button onClick={() => loginWithRedirect()}>Get Started</Button>
          }

        </div>
      </div>

      <div className="main">
        <div className="gridTwo">
          <h2>Projects</h2>
          <ul>
            <li>FrontEnd Development</li>
            <li>NodeJs. and ExpressJs.</li>
            <li>Full Stack Development</li>
            <li>React Apps</li>
          </ul>
        </div>
        <div className="gridThr">
          <h2>Feature</h2>
          <ul>
            <a href="https://pdfxmerger.netlify.app/"><li>PDF Merger</li></a>
            <a href="https://myresume-builder.netlify.app/"><li>Resume Builder</li></a>
            <a href="https://mockassignments.netlify.app/"> <li>Mock Quiz</li></a>
            <Link to="/news"><li>Latest News</li></Link>
            <Link to="/cn"><li>Notations</li></Link>
            <Link to="/"><li>Dictionary</li></Link>
          </ul>
        </div>
        <div className="gridfou">
          <h2>Help & Support</h2>
          <ul>
            <Link to="/contact"> <li>24*7 Support</li></Link>
            <Link to="/services"><li>Products</li></Link>
            <Link to="/cs"><li>Courses</li></Link>
            <li>Login/SignUp</li>
          </ul>
        </div>
        <div className="gridOn">
          <h2>Follow us on</h2>
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Mail</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className='mainLogo gridf'>
          <NavLink to="/" className='logo'>
            <img src="/images/logo.png" className='log' alt="" />
            <div className="logoName">
              <div className="upL">WORK STATION</div>
              <div className="dnL">A professionals tool kit</div>
            </div>
          </NavLink>
          <div className="powered">
            Copyright @ 2023 React Work
          </div>
        </div>
      </div>
      {/* <div className="powered">
        Copyright @ 2023 React Work
      </div> */}
    </Wrapper>
  )
}

export default Footer
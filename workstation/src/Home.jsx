import React, { useEffect } from 'react'
import HerosSec from './components/HerosSec'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import Key from './components/Key'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wrapper = styled.section`
.homeDesc{
  background:rgb(98,84,243);
  background:red;
  Button{
    margin-top:1.5rem;
  }
  p{
    font-size:2rem;
    font-family: cursive;
    width:80%;
    margin:auto;
    font-weight:600;
  }
}
.banner{
  width:16rem;
  height:16rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  border-radius:50%;
  font-size:3rem;
  font-weight:800;
  color:#f9f9ff;
  margin:2rem auto;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border: 8px solid #6379bf;
  line-height:28px;
  animation: rotation 1.5s infinite alternate-reverse;
}
@keyframes rotation {
  from {
      transform: rotate(-10deg);
  }
  to {
      transform: rotate(-40deg);
  }
}
.woi{
  width:98%;
  margin:auto;
  margin-bottom:1rem;
  margin-top:2rem;
  text-align:center;
  padding: 0rem 0;
  display:grid;
  grid-template-columns:40% 60%;
  background:rgb(98,84,243);
  border-radius:13px;
 
}
.card{
  width:auto;
  font-size:23px;
  margin:auto;
  color:#f9f9ff;
}
.hnds{
  display:block;
  width:100%;
  text-align:center;
}
.hnd{
  opacity: 0.4;
  width: inherit;
  background-repeat:no-repet;
}
.pt2{
  text-align:center;
  font-size:23px;
  margin:auto;
  margin-top:1rem;
  font-weight:800;
  padding-bottom:1rem;
}
.line1,.line2,.line3{
  width:38%;
  height:0.3rem;
  margin:auto;
  margin-top:8px;
  background:black;
  border-radius:13px;
}
.line2{
  width:28%;
  margin-top:2px;
}
.line3{
  width:18%;
  margin-top:2px;
}
.rc{
  display:block;
  width:50%;
  margin-left:2rem;
  margin-top:2rem;
}
.rc span{
  background:rgb(98,84,243);
  color:white;
  font-weight:500;
  padding:5px 13px;
}
Link{
  text-decoration:none;
}
.devices{
   display:flex;
   flex-direction:column;
   padding-top: 2rem;
}
.device{
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content:center;
    padding: 1.5rem 0;
}
.web{
  width:30rem;
  padding:2rem;
  // box-shadow:0 0 5px grey;
  border-radius:5px;
}
.phnweb{
  box-shadow: 0px 0px 10px black;
  border-radius:8px;
  display:flex;
  justify-content:center;
  margin-top:13px;
}
.feeds{
  padding:2rem 0;
  display:flex;
  flex-wrap:wrap;
  gap:3rem;
}
.feed{
  width:20rem;
  height:20rem;
  margin:auto;
  box-shadow: 0 0 36px #00000029;
  border-radius:50%;
}
.feed{
  width:15rem;
  height:15rem;
}
@media(max-width:${({ theme }) => theme.media.mobile}){
.woi{
  grid-template-columns: none;
  grid-template-rows: auto auto;
}
.rc{
  margin-left:0;
  width:98%;
  margin:auto;
}
.web{
  width:95%;
  flex-direction:column;
  align-items:center;
  margin: unset;
  backdrop-filter: blur(2rem);
  box-shadow: 0 0 8px #00000052;
}
.webCont{
  padding-left:0px;
}
}
.hnds{
  background:url('/images/hands.png');
  width:100%;
}
.pimg{
  width:5rem;
  height:5rem;
}
`

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const { isAuthenticated } = useAuth0();
  const data = {
    name: "Inventory System",
    image: "/images/hero.png"
  }
  return (
    <Wrapper>
      <HerosSec {...data} />

      <div className="devices">
        <div>
          <h1 style={{ "textAlign": "center", "fontSize": "2.5rem", "padding": "1.3rem 0",'fontFamily': 'Nunito',"lineHeight":"2.5rem" }}>
            Sync Across All Devices
          </h1>
          <div className="subTitle" style={{ "textAlign": "center", "padding": "0.8rem 0", "fontSize": "1.5rem" }}>
            Everything you need to make your building documents super fast!
          </div>
        </div>
        <div className="device">
          <div className="web">
            <p style={{ "fontWeight": "800", "background": "#244dcd", "color": "white", "padding": "8px", "marginBottom": "1rem", "borderRadius": "8px 8px 0 0" }}>WEB APPLICATION</p>
            <div className="imgWeb" data-aos="fade-right">
              <img src="/images/ws.png" alt="myspaceWeb" style={{ "width": "100%", "borderRadius": "8px", "boxShadow": "0px 0px 25px #00000036" }} />
            </div>
            <div className="webCont" style={{ "fontSize": "1.5rem" }}>
              <br></br>
              <div style={{ "fontSize": "20px", "padding": "0.4rem", "textAlign": "center", "fontWeight": "0" }}>
                Our platform can run smoothly on all systems. You can get best view in the Desktop mode. We had also made our platform responsive so that anyone can access our platform from anywhere.
              </div>
            </div>
          </div>
          <div className="web">
            <p style={{ "fontWeight": "800", "background": "#244dcd", "color": "white", "padding": "8px", "borderRadius": "8px 8px 0 0", "marginBottom": "1rem" }}>MOBILE APPLICATION</p>
            <div className="imgWeb" data-aos="fade-right">
              <img src="/images/phnimg.png" className='phnweb' alt="myspaceWeb" style={{ "width": "50%", "height": "20rem", "borderRadius": "8px", "boxShadow": "0 0 25px #00000036", "margin": "auto" }} />
            </div>
            <div className="webCont" style={{ "fontSize": "1.5rem" }}>
              <br></br>
              <div style={{ "fontSize": "20px", "padding": "0.4rem", "textAlign": "center", "fontWeight": "0" }}>
                Work Station is perfectly optimized platform for mobile devices as well as low end devices. We had also made our platform responsive so that anyone can access our platform from anywhere.
              </div>
            </div>
          </div>
        </div>

      </div>

      <Key />
    </Wrapper>
  )
}

export default Home
import React from 'react'
import styled from 'styled-components'
import { Button } from './components/Button'

const Contact = () => {
  const Wrapper = styled.section`
  display:flex;
  flex-direction:column;
  text-align:center;
  border-radius: 23px 23px 0 0;
  // padding: 5rem 0;
  .main{
    display:flex;
    padding: 6rem 0;
  }
  p{
    font-size:13px;
    padding: 0.39rem;
  }
  .form{
    display:flex;
    width:100%;
    padding: 1rem 1.5rem;
  }
  h1{
    padding:2rem 0;
    font-size:1.5rem;
  }
  h2{
    background-color:${({ theme }) => theme.colors.bg};
    color:${({ theme }) => theme.colors.black};
    margin-bottom:2rem;
    text-align:center;
    padding:2rem 0rem;
    border-radius:5px;
    box-shadow:${({ theme }) => theme.colors.shadowSupport};
  }
  form{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:even;
    width:20vw;
    height:30rem;
    box-shadow:0 0 5px #00000057;
    border-radius:13px;
    border:3px solid white;
    left:10rem;
    background: #000000e0;
    border: none;
    padding: 0 1rem;
    color: white;
    animation: tilt 0.8s linear infinite alternate-reverse;
  }
  @keyframes tilt{
    0%{
      transform:rotate(0.8deg);
    }
    100%{
      transform:rotate(-0.8deg);
    }
  }
  .screen{
    border-radius: 13px;
    box-shadow: 0 0 5px #ffffff57 inset;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 3px;
  }
  .abar{
    font-size: 10px;
    padding: 6px;
    margin-top: 3px;
    margin-bottom: 2rem;
    width: 100%;
    background: grey;
    border-radius: 8px 8px 0 0;
  }
  .hbtn{
    width: 30%;
    height: 2rem;
    border-radius: 23px;
    box-shadow: 0 0 5px #ffffff;
    margin: 8px 0;
  }
  Button{
    color:white;
    margin:auto;
    margin-top:auto;
  }
  input[type="email"],#text{
    width:95%;
    border:none;
    outline:none;
    padding:8px;
    margin:4px auto;
    background-color:${({ theme }) => theme.colors.bg};
    background-color:#000000a6;;
    border-radius:5px;
    box-shadow:${({ theme }) => theme.colors.shadowSupport};
    color:white;
  }
  img{
    position:absolute;
    width:30rem;
    height:30rem;
    right:0;
  }
  .cont{
    width:70%;
  }
  .tagline{
    margin-left:2rem;;
    font-size:4rem;
    font-weight:1000;
    color:rgb(98,84,243);
    text-align:justify;
    font-family: 'Nunito';
  }
  .tagdesc{
    display: block;
    width: 60%;
    text-align: start ;
    padding: 2rem;
    font-size: 25px;
    font-family: 'Nunito';
  }
  @media(max-width:${({ theme }) => theme.media.mobile}){
  
  .cont{
    width:100%;
  }
  img{
    display:none;
  }
  form{
    width: 80%;
    margin: auto;
    margin-top: 1.5rem;
    background: #000000e0;
    border: none;
    padding: 0 1rem;
    color: white;
  }
  .form{
    flex-direction:column-reverse;
  }
  .tagdesc {
    display: block;
    width: 100%;
  }
  `
  return (
    <Wrapper>
      <div className="main">
        <div className="form">
          <form action="https://formspree.io/f/mlevayee" method="POST">
            <p>myspace</p>
            <div className="screen">
              <div className="abar">https://universalworkstation.netlify.app/</div>
              <input type="email" name="" id="" placeholder='Email Address' required />
              <textarea id='text' cols="30" rows="10" name='message' placeholder='Write your query here...' required></textarea>
              <Button> Submit</Button>
            </div>
            <div className="hbtn"></div>
          </form>
          <div className="cont">
          <p className='tagline'>Best Customer Support</p>
          <label className='tagdesc'> We provide you with best product services. If you are facing any type of issue regarding our product so please send your queries in the given form. Contact us which more features do you need on our platform to save your valuable time.</label>
          <label className='mail' style={{'fontFamily': 'Nunito'}}>universalworkstation@gmail.com</label>
          </div>
          <img src="/images/cs.png" alt="" />
        </div>

      </div>
    </Wrapper>
  )
}

export default Contact
import React,{useEffect} from 'react'
import styled from 'styled-components'
import {FaRocket,FaJenkins,FaReact} from 'react-icons/fa'
import {BiSupport} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Key = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const Wrapper = styled.section`
    background:url("/images/kbg.jpeg");
    height:auto;
    border-radius: 8px;
    width:96%;
    margin:auto;
    margin-bottom:1rem;
    .features{
        padding:2rem 0;
        width:100%;
        height:auto;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:2rem;
        flex-wrap:wrap;
        // margin:1rem;
        color:white;
    }
    .f{
        width: 20%;
        height: 20rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        border-radius: 8px;
        box-shadow: 0 0 15px #ffffff69;
        transition: 0.2s all ease;
        &:hover{
            transform:scale(0.98);
        }
    }
    .icn{
        border-radius:50%;
        border:none;
        background:#0a1435;
        width:5rem;
        height:5rem;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:2rem;
    }
    .title{
        font-size:18px;
        font-weight:800;
    }
    .cont{
        padding:0 0.8rem;
        text-align:justify;
        font-size:13px;
    }
    @media(max-width:${({ theme }) => theme.media.mobile}){
       .features{
        margin:0;
        gap:5rem;
       }
        .f{
        width:95%;
       }
    }
    `
    return (
        <Wrapper>
            <h1 style={{ "textAlign": "center", "color": "white", "fontSize": "2.5rem", "padding": "1.3rem 0",'fontFamily': 'Nunito' }}>Key Features</h1>
            <div className="features">
                <div className="f">
                    <div className='icn'><FaReact/></div>
                    <div className="title">SPA</div>
                    <div className="cont"> SPA is a Single Page Applicaiton which serve the file faster than the normal application.</div>
                </div>
                <div className="f">
                    <div className='icn'><FaRocket/> </div>
                    <div className="title">EFFECTIVE</div>
                    <div className="cont">We provide you an efficient platform, which saves your your time while surfing on our platform. Our platform performs SPA and it is mobile friendly.</div>
                </div>
                <div className="f">
                    <div className='icn'><FaJenkins/></div>
                    <div className="title">FEASIBLE</div>
                    <div className="cont">Easy to use products, we provide the user friendly enviroment which makes your experience better.</div>
                </div>
                <div className="f">
                    <div className='icn'><BiSupport/></div>
                    <div className="title">TECHNICAL SUPPORT</div>
                    <div className="cont">We provide you with best product services. If you are facing any type of issue regarding our product so please send your queries in the given form.</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Key
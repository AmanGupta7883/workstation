import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.section`
padding:5rem 0 0 0;
marquee{
    color:white;
    margin-top:1rem;
}
.container{
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    gap:3rem;
    justify-content:center;
    padding: 2rem 0;
}
.newsCard{
    width:16rem;
    height:23rem;
    box-shadow:0 0 8px grey;
    border-radius:8px;
    text-align:start;
    padding-bottom:0.2rem;
}
img{
    width:100%;
    height:50%;
    border-radius:8px 8px 0 0;
}
.desc{
    padding:1rem;
}
.content{
    font-size:13px;
    padding:0.8rem 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.rm{
    font-size:13px;
    text-align:center;
    color:grey;
    padding-top:5px;
}
a{
    text-decoration:none;
   
}
.more{
    width:10rem;
    text-decoration:none;
    text-align:center;
    padding:1rem 0;
    margin: 0.4rem auto;
    border-radius:8px;
}
 .more{
    // box-shadow:0 0 8px grey;
    color:grey;
    // padding:1rem 0;
}
.offers_banner{
    width:16rem;
    height:16rem;
    margin: 0 auto;
    border-radius:8px;
    padding:6px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.offers_banner{
  width: 100%;
  height: auto;
  padding: 0rem 0rem 0rem 0rem;
  background: #0a1435;
  border-radius:0;
}
.imgBg,.offer {
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:3rem;
  font-weight:800;
  color:rgb(98,84,243);
}
.offer{
  background:none;
}
h2{
    text-align: center;
    padding: 2rem 0 0 0;
    font-size: 6vw;
    color: rgb(255 255 255);
    font-family: 'Nunito';
  }
@media(max-width:${({ theme }) => theme.media.mobile}){
    .offer{
      font-size:2.5rem;
      font-weight:600; 
      text-align:center;
    }
    .offers_banner{
      width: 100%;
    }
    }
`

const news = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://gnews.io/api/v4/search?q=example&apikey=fffb5c8e8d26f8d63918cf1f516cc875").then((res) => {
            // console.log(res.data.articles);
            setNews(res.data.articles)
        }).catch(()=>{
            toast.error('Please check your internet connection', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }, [])


    return (
        <>

            <Wrapper>
                <div className="offers_banner">
                    <div className="offer">
                        <h2>LATEST NEWS</h2>
                    </div>
                     </div>

                <div className="container">
                    {
                        news.map((i) => {
                            return (<div className="newsCard">
                                <img src={i.image} alt="news" />

                                <p className="desc">
                                    <h5 className="heading">{i.title}</h5>
                                    <p className='content'>{i.content}</p>
                                    <a href={i.url}> <p className='rm'>Read More</p></a>
                                </p>
                            </div>)
                        })
                    }
                </div>
                <Link to="/news" className='more'> <p className='more'>Loading...</p><br></br>
                    {/* <p>Please connect to the internet connection</p> */}
                </Link>
            </Wrapper>
            <ToastContainer/>
        </>
    )
}

export default news
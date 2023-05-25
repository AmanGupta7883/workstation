import React from 'react'
import styled from 'styled-components'
import { Button } from './components/Button'
import resumeImage from '../public/images/resume.png'
import pdfMerger from '../public/images/pdfmerger.jpg'
import assignment from '../public/images/assignment.jpg'


const Wrapper = styled.section`
padding: 5rem 0;
h2{
  text-align: center;
  padding: 2rem 0 0 0;
  font-size: 6vw;
  color: rgb(255 255 255);
  font-family: 'Nunito';
}
.cards{
  width:80%;
  margin:auto;
  display:flex;
  justify-content:center;
  gap:4rem;
  flex-wrap:wrap;
  margin-top:5rem;
}
.card,.offers_banner{
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
padding: 0rem 1rem 2rem 1rem;
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
.icn{
font-size:8rem;
color:tomato;
}
img{
width:85%;
}
Button{
margin-top:8px;
color:white;
background-color:${({ theme }) => theme.colors.btn};
}
.toolA{
width:20rem;
display:flex;
flex-direction:column;
box-shadow: 0px 0px 18px #00000038;
padding: 1rem;
border-radius: 8px;

}
a{
  text-decoration:none;
  color:#0a0a0a;
  cursor:pointer;
  backdrop-filter: blur(2rem);
}
a:hover{
transform:scale(1.00999);
}

.toolDesc {
height:auto;
padding:1.8rem;
text-align: justify;
font-size: 1rem;
display:flex;
flex-direction:column;
justify-content:space-around;
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

const Services = () => {

  return (
    <>
      <Wrapper>
        <div className="offers_banner">
          <div className="offer">
            <h2 style={{ 'fontFamily': 'Nunito' }}>EXPLORE OUR TOOLS SUITE</h2>
          </div>
        </div>
        <div className="cards">
          <a href="https://pdfxmerger.onrender.com/">
            <div className="toolA">
              <div className="card"> <div className="imgBg"> <img src={pdfMerger} alt="" /></div></div>
              <div className="toolDesc"> PdfMerger will make your work eaiser and will save your time.Choose your files which you want to merge.
                <Button style={{ "margin": "1rem 0 0 0" }}>Pdf Merger</Button>
              </div>
            </div>
          </a>
          <a href="https://myresume-builder.netlify.app/"><div className="toolA">
            <div className="card"> <div className="imgBg"><img src={resumeImage} alt="" /></div></div>
            <div className="toolDesc"> Resume Builder is very helpfull for the fresher who want to apply for job.
              <Button style={{ "margin": "1rem 0 0 0" }}>Resume Builder</Button>
            </div>
          </div>
          </a>
          <a href="https://mockassignments.netlify.app/"><div className="toolA">
            <div className="card"> <div className="imgBg"><img src={assignment} alt="" /></div></div>
            <div className="toolDesc"> Mock Assignments will let you update regarding teh technologies and with the latest news.
              <Button style={{ "margin": "1rem 0 0 0" }}>Mock Assignment</Button>
            </div>
          </div>
          </a>
        </div>
      </Wrapper >

    </>
  )
}

export default Services
import React from 'react'
import HerosSec from './components/HerosSec'
import { motion } from 'framer-motion'
import aiSearch from './components/assets/aiSearch.png'
import target from './components/assets/target.webp'
import a from './components/assets/a.jpg'
import d from './components/assets/d.jpg'
import s from './components/assets/s.jpg'

const About = () => {
  const data = {
    name: "Inventory System",
    // image: "/images/logo.png",
  }
  return (
    <motion.div
      className="text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HerosSec {...data} />

      <div className="content" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
        <div style={{ "padding": "2rem" }}>
          <h3 style={{ "fontSize": "4vw" }}>AI is the future</h3>
          <p style={{ "fontSize": "1.5vw" }}>As artificial intellegence is the future, so we are leaning towards the artificial intelligence. It provides a way much better way to resolve your problems. So for this we will also be integrating or web enviroment with the ai tools such as search engines, translator and many more.</p>
        </div>
        <div><img src={aiSearch} alt="" /></div>
      </div>
      <div className="content" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center" }}>
        <div style={{ "padding": "1rem" }}><img src={target} alt="" /></div>
        <div style={{ "padding": "2rem" }}>
          <h3 style={{ "fontSize": "4vw" }}>Our Aim </h3>
          <p style={{ "fontSize": "1.5vw" }}>We want to deliver a single platform which provides you an enviroment like your office desk. As their is a growth in the remote work and the office work the physical things are vanishing so the need of digital tools are increaing. </p>
        </div>

      </div>

      <div className="team" style={{ "marginTop": "2rem" }}>
        <h3 style={{ "fontSize": "4vw", "textAlign": "center" }}>Team Members</h3>
        <div className="teamCards" style={{ "display": "flex", "gap": "4rem", "justifyContent": "center", "flexWrap": "wrap", "padding": "1rem" }}>
          <div className="card" style={{ "width": "20rem", "height": "20rem", "boxShadow": "#00000059 0px 0px 8px", "borderRadius": "5px", "backdropFilter": "blur(1rem)", "display": "flex", "justifyContent": "space-around", "padding": "1rem", "alignItems": "center", "flexDirection": "column" }}>
            <div style={{ "textAlign": "center" }}>
              <img src={d} alt="" style={{ "width": "10rem", "height": "10rem", "borderRadius": "50%", "textAlign": "center" }} />
              <p style={{ "fontSize": "2vw", "fontWeight": "800" }}>Devansh Singh</p>
              <p>(Developer)</p>
            </div>
          </div>
          <div className="card" style={{ "width": "20rem", "height": "20rem", "boxShadow": "#00000059 0px 0px 8px", "borderRadius": "5px", "backdropFilter": "blur(1rem)", "display": "flex", "justifyContent": "space-around", "padding": "1rem", "alignItems": "center", "flexDirection": "column" }}>
            <div style={{ "textAlign": "center" }}>
            <img src={a} alt="" style={{ "width": "10rem", "height": "10rem", "borderRadius": "50%" }} />
            <p style={{ "fontSize": "2vw", "fontWeight": "800" }}>Aman Gupta</p>
            <p>(Developer)</p>
          </div>
        </div>
        <div className="card" style={{ "width": "20rem", "height": "20rem", "boxShadow": "#00000059 0px 0px 8px", "borderRadius": "5px", "backdropFilter": "blur(1rem)", "display": "flex", "justifyContent": "space-around", "padding": "1rem", "flexDirection": "column", "alignItems": "center" }}>
          <img src={s} alt="" style={{ "width": "10rem", "height": "10rem", "borderRadius": "50%" }} />
          <div style={{ "textAlign": "center" }}>
            <p style={{ "fontSize": "2vw", "fontWeight": "800" }}>Sizen Khan</p>
            <p>(Developer)</p>
          </div>
        </div>
      </div>

    </div>

    </motion.div >
  )
}

export default About
import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Error from './Error'
import ComingSoon from './ComingSoon'
import Top from './components/Top'
import AddNotes from './components/addNotes'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global'
import styled from 'styled-components'
import WelcomeScreen from './components/WelcomeScreen'
import NotesApp from './components/CloudNotes/NotesApp'

const App = () => {
  const [welScreenVisible, setWelScreenVisible] = useState(true)

  setTimeout(() => {
    setWelScreenVisible(false);
  }, 4000);

  const Wrapper = styled.section`
  user-select: none;
  `
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgb(24,24,29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249,249,255)",
      footer_bg: "#0a1435",
      border: "rgba(98,84,243,0.5)",
      btn: "rgb(98,84,243)",
      gradient: "liner-gradient(0deg,rgb(132,144,255)0%,rgb(98,189,252) 100%)",
      shadow: "0 6px 22px #0000001a",
      shadow1: "0 2px 8px #212529",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px"
    }
  }
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/services' element={<Services />} />
            <Route path='/cn' element={<NotesApp/>} />
            <Route path='/cs' element={<ComingSoon />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
          <Top />
          <AddNotes />
          {welScreenVisible ? <WelcomeScreen /> : console.log("🚀Welcome to WorkStation🚀")}
        </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  )
}

export default App
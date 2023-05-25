import React from 'react'
import styled from 'styled-components';
const Quote = () => {
    const Wrapper = styled.section`
    text-align:center;
    padding:1.5rem;
    background:rgb(98,84,243);
    span{
      font-size:2rem;
    }
    p{
      font-size:5rem;
      font-weight:500;
    }
    `
  return (
    <Wrapper>
        <div className="quote">
        <p><span>❝</span><span style={{paddingRight:"3px"}}></span>Beleive in yourself and all will be good<span style={{paddingLeft:"3px"}}></span><span>❞</span></p>
        </div>
    </Wrapper>
  )
}

export default Quote
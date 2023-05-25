import React from 'react'
import styled from 'styled-components'
import { FaArrowUp} from "react-icons/fa";

const top = () => {
    const goToTop=()=>{
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
    }
    const Wrapper = styled.section`
      display:flex;
      &:hover{
        cursor:pointer;
      }
      .topBtn {
        width: 2.5rem;
        height: 2.5rem;
        background-color: rgb(98,84,243);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25%;
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        box-shadow: 0 0px 13px #00000066;
      }
      .top-btn--icon{
        animation: gototop 1s linear infinite alternate-reverse;
      }
      @keyframes gototop{
        0%{
            transform: translateY(-0.5rem);
        }
        100%{
            transform: translateY(0.5rem);
        }
      }
    
    `

  return (
   
    <>
    <Wrapper>
   <div className="topBtn" onClick={goToTop}>
    <FaArrowUp className='top-btn--icon'/>
   </div>
   </Wrapper>
    </>
  )
}

export default top
import React from 'react'
import styled from 'styled-components'
import { FaLeanpub } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const addNotes = () => {
  const Wrapper = styled.section`
  
    background-color: rgb(98,84,243);
    position:fixed;
    left:0;
    bottom:13px;
    padding:13px;
    color: #fff; 
    box-shadow: 0 0 13px #00000066;
    border-radius:0 8px 8px 0;
    cursor:pointer;
    .Navbar-links{
      color: white;
      text-decoration:none;
      padding:0 6px;
      padding-bottom:3px;
      text-decoration:none;
      display:flex;
      align-items:center;
    }
    .Navbar-links{
     
    .notesicn{
        font-size:2rem;
    }
    label{
        margin-left:8px;
        display:none;
    }
    &:hover{
      label{
        display:block;
        cursor:pointer;
      }
    }
    
    `
  return (
    <Wrapper>
      <NavLink to="/cn" className="Navbar-links"><FaLeanpub className='notesicn' /><label>NOTES</label></NavLink>
    </Wrapper>
  )
}

export default addNotes
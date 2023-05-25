import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './components/Button'
import error404 from '../public/images/404.png'

const Wrapper = styled.section`
display:flex;
flex-direction:column;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
Button{
    color: ${({theme})=> theme.colors.white};
    margin-top:3px;
}
p{
    color:grey;
}
`
const error = () => {
    const navi = useNavigate();
   
    return (
        <Wrapper>
            <img src={error404} alt="" style={{"height":"10rem"}}/>
           <Button onClick={()=>navi(-1)}>GO BACK</Button>
           <p>Page does not exits</p>
        </Wrapper>
    )
}

export default error
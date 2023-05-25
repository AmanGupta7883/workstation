import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { AppContext } from '../Context'
import { useContext } from 'react'
import Dictionary from './Dictionary';

const HerosSec = (props) => {
    const fname = useContext(AppContext);
    const Wrapper = styled.section`
    padding-top:5rem;
    // background-color: ${({ theme }) => theme.colors.bg};
    background-color: rgb(245 245 245);
    height:100vh;
    .grid{
        display: grid;
        grid-template-columns: 50% 50%;
        padding: 2.5rem 0px;
        margin-bottom: 1rem;
    }
    .gridOne {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    .gridTwo{
       display:block;
    }
    p{
        width:60%;
        padding:4px 0;
    }
    p.name {
        font-size: 2.5rem;
        font-weight: 900;
        font-family: 'Nunito';
    }
    Button{
        margin:8px 0px;
    }
    .hero{
        width:40vw;
        -webkit-transform: scaleX(-1);
        pointer-events: none;
        user-select: none;
    }
   
    @media(max-width:${({ theme }) => theme.media.mobile}){
        height:60vh;
       .grid{
        display:block;
       }
       .gridOne{
        margin-left:-50px;
       }
        .gridTwo{
        display:none;
       }
       .searchWord{
        width: 90%;
       }
    }
    `
    return (
        <>
            <Wrapper>
                <div className='grid'>
                    <div className="gridOne">
                        <p>Greetings from</p>
                        <p className='name'>work station</p>


                        <p>We welcome you to the workspace where you will find all your tools</p>
                        <p><Button>
                            <NavLink to='/about'>Learn More</NavLink>
                        </Button>
                        </p>
                    </div>
                    <div className="gridTwo">
                        <picture>
                            <img src={props.image} alt="" className='hero' unselectable="on" />
                        </picture>
                    </div>
                </div>
               <Dictionary/>
            </Wrapper>
        </>
    )
}

export default HerosSec
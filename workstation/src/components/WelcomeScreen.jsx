import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.background {
    background-color: whitesmoke;
    width: 98vw;
    height: 98vh;
    animation: hide 4s ease-in-out forwards;
    content-visibility: visible;
}

@keyframes hide {
    to {
        content-visibility: hidden;
    }
}

.illustration {
    height: 100%;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url('/images/intro.png');
    background-position: left;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
}

.logo {
    width: 10rem;
    height: 10rem;
    padding: 0.5rem;
    // background-color: rgba(255, 255, 255, 0); 
    backdrop-filter: blur(5px);
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.253);
    display: flex;
    place-content: center;
    animation: lhide 4s ease-in-out forwards;
}
@keyframes lhide {
    to {
        display:none;
    }
}

label {
    font-family: 'Nunito';
    font-weight: 900;
    font-size: 4rem;
    display:flex;
    align-items:center;
    justify-content:center;
}

p {
    font-family: 'Nunito';
}

img {
    width: 100%;
    height: 100%;
}

#title {
    width: 0%;
    animation: show 4s ease-in-out forwards;
}

.ptown {
    font-weight: 900;
    font-size: 4rem;
    padding-top: 0.8rem;
}

.pchild {
    font-size: 18px;
    padding: 0 0 0 0.5rem;
}

@keyframes show {
    0% {
        width: 5rem;
        visibility: hidden;
    }

    50% {
        width: 30rem;
        visibility: hidden;
    }

    70% {
        width: 30rem;
        visibility: visible;
    }

    100% {
        width: 32rem;
        visibility: hidden;
    }
}

@media (max-width:760px) {
    .illustration {
        background-position: center;
        flex-direction: column-reverse;
        justify-content: center;

    }

    #title {
        width: 100%;
        text-align: center;
        opacity: 0;
        animation: showM 1s ease-in-out forwards;
    }

    @keyframes showM {
        to {
            opacity: 1;
        }
    }

    .ptown {
        font-size: 2rem;
    }

}
`

const WelcomeScreen = () => {
    return (
        <Wrapper className="background">
            <div className="background">
                <div className="illustration" style={{ "position": "fixed", "width": "100%", "top": "0", "left": "0", "zIndex": "9999" }}>
                    <h2 id="title" style={{ "display": "flex", "flexDirection": "column", "padding": "0 0.5rem" }}>
                        <p className="ptown">Work Station</p>
                        <p className="pchild">A professionals tool kit</p>
                    </h2>
                    <div className="logo">
                        <label>WS</label>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default WelcomeScreen
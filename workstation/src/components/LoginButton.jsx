import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";
import styled from 'styled-components'

const LoginButton = () => {
    const Wrapper = styled.section`
    img{
        width:2.5vw;
        border-radius:5px;
        margin-right:5px;
    }
    .main{
        display:flex;
    }
    h2{
        font-size:13px;
    }
    p{
        font-size:10px; 
    }
    .uename{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    `
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <>
            {
                isAuthenticated && (
                    <Wrapper>
                        <div className="main">
                            <img src={user.picture} alt={user.name} />
                            <div className="uename">
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </Wrapper>
                )
            }
            {
                isAuthenticated ? <Button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                </Button> : <Button onClick={() => loginWithRedirect()}>Log In</Button>
            }


        </>
    )
};

export default LoginButton;
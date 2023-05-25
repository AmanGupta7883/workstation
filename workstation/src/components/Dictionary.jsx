import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Button } from './Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
box-shadow: 0px 0px 17px #0a143533;
width:50rem;
border-radius: 5rem;
padding: 0 0.5rem;

.searchWord{
padding: 1rem;
border-radius: 5rem 0 0 5rem;
border: none;
outline: none;
width:100%;
font-size: 1.5rem;
color:#0a1435;
}

@media(max-width:${({ theme }) => theme.media.mobile}){
    width:90%;
   .searchWord{
    width: 90%;
   }
}
`

const Dictionary = () => {

    const [data, setData] = useState()
    const [searchword, setSearchWord] = useState("")
    const [definition, setDefinition] = useState();

    const onChangeHandler = (e) => {
        setSearchWord(e.target.value);
    }

    const getMeaning = () => {
        axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchword).then((response) => {
            setDefinition(response.data[0]?.meanings[0]?.definitions[0]?.definition);
            {
                toast("Meaning: " + response.data[0]?.meanings[0]?.definitions[0]?.definition, {
                    position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
        }).catch(() => {
            toast.error('No data found', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    return (
        <>
            <Wrapper>
                <input type="text" className='searchWord' placeholder='Search your word here...' value={searchword} onChange={onChangeHandler} />

                <Button style={{ "borderRadius": "0 5rem 5rem 0", "padding": "1rem", "fontSize": "1.5rem" }} onClick={getMeaning}>Search</Button>

            </Wrapper>
            {/* <p style={{"margin":"auto"}}> {definition} </p> */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Dictionary
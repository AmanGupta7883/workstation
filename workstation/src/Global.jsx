import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    // font-family: 'Nunito';
}
::-webkit-scrollbar{
    width: 6px;
}
::-webkit-scrollbar-track{
    background-color: #212529;
}
::-webkit-scrollbar-thumb{
    border-radius: 13px;
    background-color:white;
    width: 3px;
}
`;
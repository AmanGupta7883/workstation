import styled from 'styled-components'

export const Button = styled.button`
        background-color:${({ theme }) => theme.colors.btn};
        border:none;
        padding: 0.5rem 1.5rem;
        border-radius:4px;
        cursor:pointer;
        color:white;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        &:hover{
          transform:scale(0.96);
        }
        a{
            color: ${({ theme }) => theme.colors.white};
            text-decoration:none;
            font-size:1rem;
        }
        &:visited{
          color:white;
        }
   `
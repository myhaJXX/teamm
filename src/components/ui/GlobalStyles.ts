import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
    color: ${(theme) => theme.theme.colorText};
}

body{
    display: grid;
    grid-template: 75px 1fr 75px / 90%;
    justify-content: center;
    gap: 20px;
    background-color: ${(props) => props.theme.colorMain};
}

a{
    text-decoration: none;
    cursor: pointer;
    transition: all .2s linear;
}

button{
    border: none;
    background-color: transparent;
    cursor: pointer;
}

input{
    outline: none;
    border: none;
    background-color: transparent;
    cursor: text;
}

h1{
    font-size: 3em;
}

h2{
    font-size: 2.5em;
}

h3{
    font-size: 1.75em;
}

h4{
    font-size: 1.25em;
}

p{
    font-size: 1em;
}
`;

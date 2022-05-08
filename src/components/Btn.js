import Styled from 'styled-components'

const Btn = Styled.button `
  
width: 60px;
height: 60px;
margin: 5px 10px 5px;
border-radius: 3px;
border: 2px solid red;

:hover {
    background-color: red;
}

`

const DisplayBtn = Styled.button `

    width: 120px;
    height: 30px;
    margin: 15px 0;
    background-color: green;
    border-radius: 5px;
    border: 2px solid black;  
    color: white;
    cursor: pointer;
    :hover {
        background-color: red;
    }
    
`

const DescriptionBox = Styled.div `

    width: 160px;
    height: 35px;
    background-color: gray;
    cursor: context-menu;
    padding-top: 4px;
    text-align: center;

`

export {Btn, DisplayBtn, DescriptionBox}
import Styled from "styled-components";

const BankInside = Styled.div`
    background-color: green;
    height: 28px;
    width: 35px;
`

const Bank = Styled.div `
    display: flex;
    justify-content: ${props => props.switch};
    height: 30px;
    width: 70px;
    padding: 3px;
    border: 2px solid black;
    cursor: pointer;
`




export {Bank, BankInside}
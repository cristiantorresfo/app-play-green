import styled from 'styled-components';

export const Footer = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 25px;
    position: fixed;
  bottom: 0;
`
export const ImagenFooter = styled.img`    
    width:30px;
`

export const ButtonFooter = styled.button`
    background-color: #fff;
    border-radius: 15px;
    border:none;
    cursor: pointer;
    &:hover{
        background-color: #D6D6D9;
    }
    &:active{
        background-color: #D6D6D6;
    }    
`
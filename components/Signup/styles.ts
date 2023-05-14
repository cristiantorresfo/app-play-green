import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:column;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
padding: 20px;
`
export const Title = styled.h1`

`
export const Description = styled.p`

`
export const Image = styled.img`    
    width:30px;
`

export const ButtonBack = styled.button`
    align-self:flex-start;
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
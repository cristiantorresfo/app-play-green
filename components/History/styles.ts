import styled from 'styled-components';


export const ContainerHistory = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding: 20px;
`
export const Image = styled.img`    
    width:30px;
`

export const Button = styled.button`
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

export const BoxHistoryLikes = styled.div`
width: 100%;
height: 58vh;
overflow: scroll;
`
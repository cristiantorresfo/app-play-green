import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:column;
width: 100%;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`

`
export const Description = styled.p`
margin-bottom: 30px;
`
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  & + label {
    position: absolute;
    left: 10px;
    top: -12px;
    font-size: 14px;
    color: #ccc;
    background-color: #fff;
    padding: 0 5px;
  }
`;

export const Button = styled.button`
padding: 22px 38px;
background: linear-gradient(99deg, #236BFE 6.69%, #0D4ED3 80.95%);
box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
border-radius: 25px;
color: white;
border: none;
font-size: 16px;
font-weight: bold;
cursor: pointer;
`;

export const Text = styled.span`
color: #236BFE;
margin-bottom:20px;
`
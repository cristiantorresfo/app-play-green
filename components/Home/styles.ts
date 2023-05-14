import styled from 'styled-components';

export const SlideContainer = styled.div`
    height: 90vh; 
  /* display: flex; */
  justify-content: center;
  align-items: center;
`
export const ImageSlide = styled.img`
 height: 100%; 
  width: auto;
  /* object-fit: cover;  */
`

export const DivLoading = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const ContainerButtons = styled.div` 
padding   : 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const ImageLike = styled.img`
  height: 50px; 
  width: 50px;
  /* object-fit: cover;  */
`
export const ButtonLike = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
border-radius: 50%;
&:active{background-color: #D6D6D6    
}
&:hover{background-color: #D6D6D6        
}
  /* object-fit: cover;  */
`
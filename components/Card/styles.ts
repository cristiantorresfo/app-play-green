import styled from 'styled-components';

export const BoxCard = styled.div`
   position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1,80%) repeat(1,20%);
    background-color: #fff;
    border-radius: 30px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
`
export const ImageCard = styled.img`
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
    display: block;
    overflow: hidden;
    border-radius: 30px 0 0 30px;
`
export const ImageLogo = styled.img`
    width: 30px;
    margin-left: 20%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 30px 0 0 30px;
`

export const TextName = styled.p`
   position: absolute;
   align-self: flex-start;
   z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
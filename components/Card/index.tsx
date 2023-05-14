import { BoxCard, ImageCard, ImageLogo, TextName } from "./styles";

type TCard = {
    src:string;
    name: string;
}

export  function Card({src,name, logo}:TCard) {
  return (
    <BoxCard>
        <ImageCard src={src} />
        <ImageLogo src={logo}/>
        <TextName>{name}</TextName>  
    </BoxCard>
  )
}

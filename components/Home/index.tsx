

import React, { useCallback, useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useImages from '../../hooks/useImages';
import { ButtonLike, ContainerButtons, ContainerSlide, DivLoading, ImageLike, ImageSlide, SlideContainer } from './styles';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { auth, updateUser } from '../../lib/firebase';
import { arrayRemove, arrayUnion } from 'firebase/firestore';
import next from 'next/types';
import { UserContext } from '../../shared/contexts/UserContext';
import { FooterComponent } from '../Footer';

export default function Home() {
  const { data } = useImages();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); 
  const {users} = useContext(UserContext)
  console.log(users, 'users')
  const currentUser = auth?.currentUser;
  console.log(currentUser)
  const [currentSlide, setCurrentSlide] = useState(
    <ImageSlide
      src={data?.sports[0]?.strSportThumb || ''}
      alt={data?.sports[0]?.strSport || ''}
    />
  );

  useEffect(() => {
    setCurrentSlide(
      <ImageSlide
        src={data?.sports[0]?.strSportThumb || ''}
        alt={data?.sports[0]?.strSport || ''}
      />
    );
  }, [data]);

  const handleLike = useCallback(() => {
    // Obtenemos el ID de la imagen actual
    const nextIndex = currentSlideIndex === data?.sports.length - 1 ? 0 : currentSlideIndex + 1;
    const nextImage = data?.sports[nextIndex];
    console.log(nextImage, 'nextimage')
    const currentImageId = nextImage?.idSport;
    
    const userToUpdate = users?.find((user: any) => user.uid === currentUser?.uid);
    if (userToUpdate) {
      const dataUpdate = {
        favorites: arrayUnion(currentImageId),
        dislike: arrayRemove(currentImageId),
      };
      updateUser(userToUpdate?.id, dataUpdate);
    }

    

  
    
    setCurrentSlide(
      <ImageSlide
        src={data?.sports[currentSlideIndex + 1]?.strSportThumb || ''}
        alt={data?.sports[currentSlideIndex + 1]?.strSport || ''}
      />
    );
  
    // updateUser(currentUser?.uid, dataUpdate)
    setCurrentSlideIndex(
        currentSlideIndex === data?.sports.length - 1 ? 0 : currentSlideIndex + 1
      );
  }, [currentSlideIndex, data]);
  
  const handleDislike = useCallback(() => {
    // Obtenemos el ID de la imagen actual
    const nextIndex = currentSlideIndex === data?.sports.length - 1 ? 0 : currentSlideIndex + 1;
    const nextImage = data?.sports[nextIndex];
    const currentImageId = nextImage?.idSport;
    console.log(currentImageId, 'id')
    
    const userToUpdate = users?.find((user: any) => user.uid === currentUser?.uid);
    if (userToUpdate) {
      const dataUpdate = {
        favorites:arrayRemove(currentImageId),
        dislike:  arrayUnion(currentImageId),
      };
      updateUser(userToUpdate?.id, dataUpdate);
    }
  
   
    setCurrentSlide(
      <ImageSlide
        src={data?.sports[currentSlideIndex + 1]?.strSportThumb || ''}
        alt={data?.sports[currentSlideIndex + 1]?.strSport || ''}
      />
    );
  
    // updateUser(currentUser?.uid, dataUpdate)
    setCurrentSlideIndex(
        currentSlideIndex === data?.sports.length - 1 ? 0 : currentSlideIndex + 1
      );
  }, [currentSlideIndex, data]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    afterChange: (current) => setCurrentSlideIndex(current),
  };
  
  if (!data?.sports?.length){
    return <DivLoading>Loading... </DivLoading>
  }

  return (
    <ContainerSlide>
      <Slider {...settings}>{currentSlide}</Slider>
      <ContainerButtons>
        <ButtonLike onClick={handleDislike}><ImageLike src='dislike.png'/></ButtonLike>
        <ButtonLike onClick={handleLike}><ImageLike src='like.png'/></ButtonLike>
      </ContainerButtons>
      <FooterComponent/>
    </ContainerSlide>
  );
}

import React, { useContext, useMemo } from 'react'
import { BoxHistoryLikes, Button, ContainerHistory, Image } from './styles'
import { useRouter } from 'next/router'
import { UserContext } from '../../shared/contexts/UserContext'
import { auth } from '../../lib/firebase'
import useImages from '../../hooks/useImages'
import { Card } from '../Card'
import { FooterComponent } from '../Footer'

export default function History() {
    const router = useRouter()
    const { users } = useContext(UserContext)
    const currentUser = auth?.currentUser;
    const { data } = useImages();
    const userData = users?.filter((user: any) => user?.uid === currentUser?.uid)

    const getImage = (id: string): string => {
        const sport = data?.sports?.find((sport: any) => sport.idSport === id);
        const urlImage = sport?.strSportThumb;
        return urlImage;
    }

    const getName = (id: string): string => {
        const sport = data?.sports?.find((sport: any) => sport.idSport === id);
        const Name = sport?.strSport;
        return Name;
    }
    return (
        <ContainerHistory>
            <Button>
                <Image src='flecha.png' onClick={() => router.back()} />
            </Button>
            <h1>History</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima exercitationem magnam placeat at fugiat, ad culpa pariatur impedit amet.</p>
            {data?.sports ? <div>Loading...</div>
                :
                <BoxHistoryLikes>
                    {userData?.[0]?.favorites?.length > 0 &&
                        <>
                            <h4>Likes</h4>
                            {userData?.[0]?.favorites?.map((fav: any, index: number) => {
                                return (
                                    <Card key={`${index}-card`} src={(getImage(fav))} name={getName(fav)} logo='like.png' />
                                )
                            })}
                        </>
                    }
                    {userData?.[0]?.dislike?.length > 0 &&
                        <>
                            <h4>Dislikes</h4>
                            {userData?.[0]?.dislike?.map((fav: any, index: number) => {
                                return (
                                    <Card key={`${index}-card`} src={(getImage(fav))} name={getName(fav)} logo='dislike.png' />
                                )
                            })}
                        </>
                    }
                </BoxHistoryLikes>
            }
            <FooterComponent />
        </ContainerHistory>
    )
}

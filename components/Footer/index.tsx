import React from 'react'
import {ButtonFooter, Footer, ImagenFooter} from './styles'
import { useRouter } from 'next/router'
import { handleSignOut } from '../../lib/firebase'

export function FooterComponent() {
    const router = useRouter()
  return (
    <Footer>
       <ButtonFooter>
            <ImagenFooter src='casa.png' onClick={()=> router.push('/home')}/>        
        </ButtonFooter>
        <ButtonFooter>
            <ImagenFooter src='circle.png'onClick={()=> router.push('/history')}/>            
        </ButtonFooter>
        <ButtonFooter>            
            <ImagenFooter src='salir.png' onClick={()=> handleSignOut(router)}/>        
        </ButtonFooter>
    </Footer>
  )
}

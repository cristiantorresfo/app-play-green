import React, { useContext, useState } from 'react'
import { Button, Container, Description, Input, InputWrapper, Text, Title } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LogIn } from '../../lib/firebase'

export function Login() {
    const router = useRouter()
    const [isLoadingLogin, setIsLoadingLogin] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (event:any) => setEmail(event.target.value);
    const handlePasswordChange = (event:any) => setPassword(event.target.value);


    const handleSubmit = (event:any) => {
        event.preventDefault();
        LogIn(email, password, router, setIsLoadingLogin);
    };
    
    return (
        <Container>
            <Title>Welcome</Title>
            <Description>Enter your credentials to log in</Description>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <InputWrapper>
                    <Input id="email" type="email" onChange={handleEmailChange} />
                    <label htmlFor="email">User</label>
                </InputWrapper>
                <InputWrapper>
                    <Input id="password" type="password" onChange={handlePasswordChange} />
                    <label htmlFor="password">Password</label>
                </InputWrapper>
                <Link href='/sign-up'>Create an account here!</Link>
                <br />
                <Button disabled={isLoadingLogin} type='submit'>{isLoadingLogin ? 'Loading...' : 'Log in'}</Button>
            </form>
        </Container>
    )
}

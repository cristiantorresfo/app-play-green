import { useState } from "react";
import { Button, Input, InputWrapper } from "../Login/styles";
import { ButtonBack, Container, Description, Image, Title } from "./styles";
import { signUp } from '../../lib/firebase'
import { useRouter } from "next/router";

export function SignUp() {
    const router = useRouter()
    const [isLoadingCreate, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event:any) => setEmail(event.target.value);
    const handlePasswordChange = (event:any) => setPassword(event.target.value);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        signUp(email, password, router, setIsLoading);
    };

    return (
        <Container>
            <ButtonBack>
                <Image src='flecha.png' onClick={() => router.back()} />
            </ButtonBack>
            <Title>Create your user</Title>
            <Description>Enter your credentials to sign up</Description>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <InputWrapper>
                    <Input id="email" type="email" onChange={handleEmailChange} />
                    <label htmlFor="email">Email</label>
                </InputWrapper>
                <InputWrapper>
                    <Input id="password" type="password" onChange={handlePasswordChange} />
                    <label htmlFor="password">Password</label>
                </InputWrapper>
                {/* <Link href='/sign-up'>Create an account here!</Link> */}
                <br />
                <Button disabled={isLoadingCreate} type="submit">{isLoadingCreate ? 'Loading...' : 'Sign up'}</Button>
            </form>

        </Container>
    )
}

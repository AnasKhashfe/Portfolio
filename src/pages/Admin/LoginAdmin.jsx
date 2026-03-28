import { supabase } from '../../../supabase-client';
import { useState, useEffect } from 'react';



function LoginAdmin({ setUser }) {


    const [isSignIn, setIsSignIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const login = async (e) => {
        e.preventDefault();
        if (isSignIn) {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password
            })
            setIsSignIn(!isSignIn);
            if (error) {
                console.error("Error Signing Up :", error.message)
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            setIsSignIn(isSignIn);
            if (error) {
                console.error("Error Signing In :", error.message)
            }
        }

    }


    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });

    }, []);

    return (
        <>
            <form className='contact-section' onSubmit={login}>
                <input type="text" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>

            </form>
        </>
    )
}

export default LoginAdmin



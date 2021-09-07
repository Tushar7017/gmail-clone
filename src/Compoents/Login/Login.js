import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../firebase'
import './Login.css'
import login from "./login.png"

const Login = () => {
    const dispatch = useDispatch();
    const signin = async () => {
        auth
            .signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    })
                )
            })
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src={login} alt="Login" />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={signin}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login

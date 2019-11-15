import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import { useAuthContext } from "../../authentication";
import * as AuthService from '../../authentication/AuthService';

const SignIn = props => {
    // get the login from our context
    const { onLogin } = useAuthContext()

    const user = AuthService.getPeon
    const heroUser = AuthService.getHero
    const godlikeUser = AuthService.getGodlike

    const signInHandler = user => () => {
        // whatever should be handle here (form / input)
        console.log('singing in')
        onLogin({
            user: user()
        })
        return props.callback()
    }
    const signInWithPeonHandler = signInHandler(user)
    const signInWithHeroHandler = signInHandler(heroUser)
    const signInWithGodlikeHandler = signInHandler(godlikeUser)

    return (
        <Fragment>
            <h1>
                <span role="img" aria-label="emoji">🤷‍♀️</span>
                Who are you?
            </h1>
            <Button
                variant="contained"
                color="primary"
                onClick={signInWithPeonHandler}>
                SIGN IN
            </Button>
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={signInWithHeroHandler}>
                SIGN IN (admin)
            </Button>
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={signInWithGodlikeHandler}>
                SIGN IN (super admin)
            </Button>
        </Fragment>)
}

export default SignIn
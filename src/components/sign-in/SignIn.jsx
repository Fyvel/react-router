import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import { useAuthContext } from "../../authentication";
import * as Role from '../../authentication/roles';

const SignIn = props => {
    // get the login from our context
    const { onLogin } = useAuthContext()

    const signInHandler = () => {
        // whatever should be handle here (form / input)
        console.log('singing in')
        onLogin({
            user: {
                firstname: 'Kakarot',
                lastname: 'Sangoku',
                claims: [Role.GODLIKE]
            }
        })
        return props.callback()
    }

    return (
        <Fragment>
            <h1>
                <span role="img" aria-label="emoji">🤷‍♀️</span>
                Who are you?
            </h1>
            <Button
                variant="contained"
                color="primary"
                onClick={signInHandler}>
                SIGN IN
            </Button>
        </Fragment>)
}

export default SignIn
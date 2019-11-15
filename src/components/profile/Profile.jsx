import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';

import { useAuthContext } from "../../authentication";

const Profile = () => {
    const { user, onLogout } = useAuthContext();
    return (
        <Fragment>
            <h1>
                <span role="img" aria-label="emoji">🙋‍♂️</span>
                Hello
                <br />
                {user.firstname} {user.lastname}
            </h1>
            <Button
                variant="outlined"
                color="secondary"
                onClick={onLogout}>
                LOG OUT
            </Button>
        </Fragment>)
}

export default Profile
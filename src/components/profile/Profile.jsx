import React from "react";
import Button from '@material-ui/core/Button';

import { useAuthContext } from "../../authentication";

export const Profile = () => {
    const { user, onLogout } = useAuthContext();
    return (
        <div className="Profile">
            <span role="img" aria-label="emoji">🙋‍♂️</span>
            Hello
            <br />
            {user.firstname} {user.lastname}
            <br />
            <Button
                variant="outlined"
                color="secondary"
                onClick={onLogout}>
                LOG OUT
            </Button>
        </div>)
}

export const ProfileDetails = () => (
    <h1>Profile details / settings</h1>
)
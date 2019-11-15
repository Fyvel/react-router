import React, { Fragment } from "react";
import { useAuthContext } from "../../authentication";

const Unauthorized = () => {
    const { user } = useAuthContext();
    return (
        <Fragment>
            <h1>
                <span role="img" aria-label="emoji">🔒</span>
                Access denied
            </h1>
            Your only have {user.claims.join(' ')}!
        </Fragment>
    )
}

export default Unauthorized
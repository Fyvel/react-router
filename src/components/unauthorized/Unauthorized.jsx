import React, { Fragment } from "react";
import { useAuthContext } from "../../authentication";

const Unauthorized = () => {
    const { user } = useAuthContext();
    return (
        <Fragment>
            <h1>
                <span role="img" aria-label="emoji">🔒</span>
                ACCESS DENIED
            </h1>
            Here are your current permissions: {user.claims.map(x => x.name).join(', ')}!
        </Fragment>
    )
}

export default Unauthorized
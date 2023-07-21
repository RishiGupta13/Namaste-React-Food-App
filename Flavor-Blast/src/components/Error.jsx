import { useRouteError } from "react-router-dom"

export const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h2>OOPS! Seems like you came to a wrong page</h2>
            <h2>{err.status} : {err.statusText} </h2>
        </div>
    )

}
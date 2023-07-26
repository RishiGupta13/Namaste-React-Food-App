import { useRouteError } from "react-router-dom"

export const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div>
            <h2>OOPS! Seems like this restaurant is not available at this time, please check other restaurant</h2>
        </div>
    )

}
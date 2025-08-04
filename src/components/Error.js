import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Ooops!!!!</h1>
            <p>Something went wrong!!</p>
            <p>{error.status} : {error.statusText}</p>
            <p>{error.data}</p>
        </div>
    )
}

export default Error;
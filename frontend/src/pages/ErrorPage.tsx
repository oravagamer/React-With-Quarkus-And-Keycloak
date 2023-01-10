import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>{error.status}</h1>
            <h4>{error.statusText || error.message}</h4>
        </div>
    )
}

export default ErrorPage;

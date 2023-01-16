import { useOidc } from "@axa-fr/react-oidc";

const LogButton = () => {
  const { logout, login, isAuthenticated } = useOidc();

  return (
    <>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
    </>
  );
};

export default LogButton;
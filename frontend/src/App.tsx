import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import LoadingPage from "./pages/LoadingPage";
import { OidcProvider, OidcSecure } from "@axa-fr/react-oidc";
import { configuration } from "./settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "profile",
          element: (
            <OidcSecure>
              <ProfilePage />
            </OidcSecure>
          ),
        },
      ],
    },
  ]);

  return (
    <OidcProvider configuration={configuration}>
      <RouterProvider router={router} fallbackElement={<LoadingPage />} />
    </OidcProvider>
  );
}

export default App;

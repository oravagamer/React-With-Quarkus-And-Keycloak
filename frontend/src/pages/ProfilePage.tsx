import {useOidcIdToken, useOidcUser} from "@axa-fr/react-oidc";
import { useEffect } from "react";
import axios from "axios";
import { frontendUrl } from "../settings";

const ProfilePage = () => {
  const { idToken } = useOidcIdToken();
  const { oidcUser } = useOidcUser();

  useEffect(() => {
    axios.create({
      method: "get",
      baseURL: `${frontendUrl}/rest/api/user`,
      headers: { Authorization: "Bearer " + idToken },
    }).get("/profile").then((data) => {
      console.log(data);
    })
  });

  return <div className="profile-page">{JSON.stringify(oidcUser)}</div>;
};

export default ProfilePage;

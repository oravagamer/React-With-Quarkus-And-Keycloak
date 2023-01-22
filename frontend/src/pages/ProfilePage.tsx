import { useOidcIdToken, useOidcUser } from "@axa-fr/react-oidc";
import { useEffect } from "react";
import axios from "axios";
import { frontendUrl } from "../settings";

const ProfilePage = () => {
  const { oidcUser } = useOidcUser();

  useEffect(() => {});

  return <div className="profile-page">{JSON.stringify(oidcUser)}</div>;
};

export default ProfilePage;

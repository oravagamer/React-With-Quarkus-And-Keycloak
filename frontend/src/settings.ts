import { OidcConfiguration } from "@axa-fr/react-oidc";

const url = "localhost:5173";

export const frontendUrl = `http://${url}`;

export const configuration: OidcConfiguration = {
  authority: `${frontendUrl}/rest/oidc/realms/RWQAK-realm`,
  client_id: "react-web-app",
  redirect_uri: window.location.origin + "/authentication/callback",
  scope: "openid",
};

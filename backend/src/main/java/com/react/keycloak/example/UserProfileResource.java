package com.react.keycloak.example;

import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/user")
public class UserProfileResource {

    @Inject
    SecurityIdentity keycloakSecurityContext;

    @GET
    @Path("/profile")
    @Authenticated
    public Object me() {
        return new User(keycloakSecurityContext);
    }

    public static class User {

        private final String userName;

        User(SecurityIdentity securityContext) {
            this.userName = securityContext.getPrincipal().getName();
        }

        public String getUserName() {
            return userName;
        }
    }
}

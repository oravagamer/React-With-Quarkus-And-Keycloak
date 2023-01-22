package com.react.keycloak.example.calendar;

import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static com.react.keycloak.example.calendar.CalendarEvent.createCalendarEvent;

@Path("/calendar")
public class CalendarResource {

    @Inject
    SecurityIdentity keycloakSecurityContext;

    @Path("/create")
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Authenticated
    @Transactional
    public Response addEvent(@MultipartForm CalendarEventForm calendarEventForm) {
       if (createCalendarEvent(calendarEventForm, keycloakSecurityContext.getPrincipal().getName())) {
           return Response.ok().build();
       } else {
           return Response.status(409).build();
       }
    }
}

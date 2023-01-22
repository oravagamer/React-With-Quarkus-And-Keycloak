package com.react.keycloak.example.calendar;

import org.jboss.resteasy.annotations.providers.multipart.PartType;

import javax.ws.rs.FormParam;
import javax.ws.rs.core.MediaType;
import java.sql.Date;

public class CalendarEventForm {
    @FormParam("name")
    public String name;

    @FormParam("description")
    @PartType(MediaType.TEXT_PLAIN)
    public String description;

    @FormParam("date")
    public Date date;
}

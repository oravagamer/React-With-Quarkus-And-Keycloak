package com.react.keycloak.example.calendar;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "calendar-event")
@Cacheable
public class CalendarEvent extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String name;
    public String description;
    public Date date;
    public String authorName;

    public static boolean createCalendarEvent(CalendarEventForm calendarEventForm, String authorName) {
        CalendarEvent calendarEvent = new CalendarEvent();
        calendarEvent.authorName = authorName;
        calendarEvent.name = calendarEventForm.name;
        calendarEvent.description = calendarEventForm.description;
        calendarEvent.date = calendarEventForm.date;
        calendarEvent.persist();
        return calendarEvent.isPersistent();
    }
}

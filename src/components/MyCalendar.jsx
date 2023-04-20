import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import timegrid from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es';
import { useState } from "react";
import { v4 as uuid } from "uuid";

const EventItem = ({ info }) => {
  const { event } = info;
  return (
    <div>
      <p>{formatDate(event.startStr, {hour: 'numeric', minute: '2-digit', omitZeroMinute: false, hour12: true, meridiem: 'short'})} - {formatDate(event.endStr, {hour: 'numeric', minute: '2-digit', omitZeroMinute: false, hour12: true, meridiem: 'short'})}</p>
      <p>{event.title}</p>
    </div>
  );
};

export const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Ingresar nuevo evento");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid()
        }
      ]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  return (
    <div>
      <FullCalendar
        editable
        selectable
        locale={esLocale}
        height={480}
        allDaySlot={false}
        eventClick={handleEventClick}
        slotMinTime={{ slotDuration:'08:00:00' }}
        slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            hour12: true,
            meridiem: 'short'
        }}
        events={events}
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          center:"title",
          end: "timeGridWeek timeGridDay"
        }}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[timegrid, interactionPlugin]}
        views={["timeGridWeek", "timeGridDay"]}
      />
    </div>
  );
};


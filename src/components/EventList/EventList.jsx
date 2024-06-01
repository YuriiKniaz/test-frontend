import React, { useEffect, useState } from 'react';
import { getUsers, getEvents, addEvent, addUser } from 'api/api';
const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await getEvents();
      setEvents(response.events);
    };

    getAllEvents();
  }, []);





  return (
    <div>
      {events.map(event => (
        <li key={event._id}>
          <p>{event.title}</p>
          <p>{event.description}</p>
          <button>Register</button>
          <button>View</button>
        </li>
      ))}
    </div>
  );
};

export default EventList;

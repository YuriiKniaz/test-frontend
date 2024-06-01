import React, { useEffect, useState } from 'react';
import { getEvents } from 'api/api';

const Event = () => {
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
          <p>{new Date(event.eventDate).toLocaleDateString()}</p>
          <p>{event.organizer}</p>
          <ul>
            {event.users.map(user => (
              <li key={user._id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
};

export default Event;

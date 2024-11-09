import React, { useState, useEffect, useCallback } from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
import './players.css';

export function Players(props) {
  const userName = props.userName;

  const [events, setEvent] = useState([]);

  // Memoize handleGameEvent to keep the same reference
  const handleGameEvent = useCallback((event) => {
    setEvent((prevEvents) => {
      let newEvents = [event, ...prevEvents];
      if (newEvents.length > 10) {
        newEvents = newEvents.slice(0, 10);
      }
      return newEvents;
    });
  }, []);

  useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, [handleGameEvent]); // Include handleGameEvent in dependency array

  function createMessageArray() {
    return events.map((event, i) => {
      let message = 'unknown';
      if (event.type === GameEvent.End) {
        message = `scored ${event.value.score}`;
      } else if (event.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      return (
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span> {message}
        </div>
      );
    });
  }

  return (
    <div className='players'>
      Player
      <span className='player-name'> {userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}

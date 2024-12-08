import React from 'react';
import './play.css';
import { useState, useEffect } from 'react';
import { Players } from './players';
import { MapGame } from './mapGame';

export function Play(props) {

  const [ipAddress, setIpAddress] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
        setRegion(data.region);
        setCity(data.city);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  }, []);

  return (
    <main className="container-fluid">
      <div className="row">
        <aside className="col-md-2 sidebar">
            <div className="players">
              <Players userName={props.userName} />
              <div><strong>Your Location:</strong> {city}, {region}</div>
            </div>
        </aside>
        <section className="col-md-10">
          <div className="text-center"> 
            <MapGame userName={props.userName} myLat={latitude} myLong={longitude} />
          </div>
        </section>
      </div>
    </main>
  );
}
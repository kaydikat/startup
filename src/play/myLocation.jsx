import React, { useState, useEffect } from 'react';

export function MyLocation() {
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
    <div>
      <p><strong>IP Address:</strong> {ipAddress}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Latitude:</strong> {latitude}</p>
      <p><strong>Longitude:</strong> {longitude}</p>
    </div>
  );
}
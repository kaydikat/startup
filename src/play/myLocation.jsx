import React from 'react';

export function MyLocation() {
  const [region, setRegion] = React.useState('');
  const [city, setCity] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  const ipAddress = MyIpAddress();
  React.useEffect(() => {
    fetch(`https://apip.cc/json/${ipAddress}`)
      .then((response) => response.json())
      .then((data) => {
        setRegion(data.region_name);
        setCity(data.city);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      })
      .catch();
  }, []);


  
  return (
     <div>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Latitude:</strong> {latitude}</p>
      <p><strong>Longitude:</strong> {longitude}</p>
    </div>
  );
}

export function MyIpAddress() {
  const [ipAddress, setIpAddress] = React.useState('');

  React.useEffect(() => {
    fetch(`https://api.ipify.org?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ipAddress);
      })
      .catch();
  }, []);

  return (
    {ipAddress}
  );
}
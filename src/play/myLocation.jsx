import React from 'react';

export function MyLocation() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
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
        set
      })
      .catch();

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      })
      .catch();
  }, []);


  
  return (
    {region}, {city}, {latitude}, {longitude}
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
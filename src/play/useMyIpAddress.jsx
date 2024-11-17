import { useState, useEffect } from 'react';

function useMyIpAddress() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch(`https://api.aruljohn.com/ip/json`)
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ipAddress);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return ipAddress;
}
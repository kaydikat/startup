import React from 'react';

export function MyLocation(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  const [location, setLocation] = React.useState({});
  const [ipAddress, setIpAddress] = React.useState('');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch(`https://apip.cc/json/${props.ipAddress}`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);


  
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='stock background' />
        </div>

        <p>Simon is a repetitive memory game where you follow the demonstrated color sequence until you make a mistake. The longer the sequence you repeat, the greater your score.</p>

        <p>
          The name Simon is a registered trademark of Milton-Bradley. Our use of the name and the game is for non-profit educational use only. No part of this code or application may be used outside
          of that definition.
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
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
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <p>Your IP address is {ipAddress}</p>
      </div>
    </main>
  );
}
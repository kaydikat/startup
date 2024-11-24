// login/inauthenticated.jsx (This contains that function we are trying to get to work)

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    console.log(`Logging in as ${userName} with password ${password}`);
    console.log(`Endpoint is ${endpoint}`);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      
      console.log(`POST response status: ${response.status}`);
      
      if (response.status === 200) {
        console.log(`Login/Create successful for user: ${userName}`);
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
      } else {
        let errorMsg = `⚠ Error: Received status ${response.status}`;
        try {
          const body = await response.json();
          errorMsg += ` - ${body.msg}`;
        } catch (parseError) {
          errorMsg += ` - Unable to parse error message.`;
        }
        console.error(`Login/Create error: ${errorMsg}`);
        setDisplayError(errorMsg);
      }
    } catch (error) {
      console.error(`POST fetch error: ${error.message}`);
      setDisplayError(`⚠ Error: Network issue or server error. Details: ${error.message}`);
    }
  }
  

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}

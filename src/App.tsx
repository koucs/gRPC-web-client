import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {HelloRequest} from './pb-web/helloworld_pb';
import {GreeterClient} from './pb-web/HelloworldServiceClientPb';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClick = async () => {
    const request = new HelloRequest();
    request.setName(name);
    const client = new GreeterClient("http://172.24.245.102:8080");
    const response = await client.sayHello(request, {});
    setMessage(response.getMessage());
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <input 
        type="text"
        value={name}
        onChange={onChange}
      />
      <button onClick={onClick}>Send</button>
      <p>{message}</p>
    </div>
  );
}

export default App;

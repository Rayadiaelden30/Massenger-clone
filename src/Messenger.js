// Messenger.js
import React, { useState } from 'react';
import './Massenger.css';

const Messenger = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="messenger">
      <div className="header">
        <h1>Messenger</h1>
      </div>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Messenger;

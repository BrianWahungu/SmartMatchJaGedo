import React, { useEffect, useState } from 'react';
import '../styles/ChatInbox.css';

const ChatInbox = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5000/api/chat/inbox', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setMessages(data);
      } else {
        console.error(data.error);
      }
    } catch (err) {
      console.error('INBOX ERROR:', err.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="chat-inbox">
      <h2>📨 Your Messages</h2>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="message-list">
          {messages.map((msg) => (
            <li key={msg.id} className={`message ${msg.sender}`}>
              <div>
                <strong>{msg.sender === 'user' ? 'You' : msg.builder_name}</strong>
              </div>
              <p>{msg.message}</p>
              <span>{new Date(msg.sent_at).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChatInbox;

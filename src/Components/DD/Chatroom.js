import React, { useState, useRef } from 'react';
import './Chatroom.css'; // External CSS for styling
import { BiFile, BiVideo } from "react-icons/bi";

const ChatRoom = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);

   //const videoRef = useRef =(null);
  // temp incoming messages for the side panel
  const incomingMessages = [
    {
        name: 'Patient 1',
        text: 'Hy'
    },
    {
      name: 'Patient 2',
      text: 'hlo'
    }
  ];
  // const incomingMessages = ['Hello from User1!',
  //    'Hi there from User2!', 
  //    'Welcome to the chat!'];

  // Handle message submission
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { type: 'text', content: message }]);
      setMessage('');
    }
  };

  // Handle file attachment
  const handleFileAttachment = (e) => {
    const attachedFile = e.target.files[0];
    setFile(attachedFile);
    if (attachedFile) {
      setMessages([...messages, { type: 'file', content: attachedFile.name }]); // Attach file name to messages
    }
  };

  // Handle video call button click (just a placeholder for now)
  const handleStartVideoCall = () => {
    alert('Starting video call...');

    // You would implement WebRTC or another video call solution here
  };

  // const handleStartVideoCall = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: { width: 640, height: 480 }, // Adjust resolution as needed
  //       audio: true,
  //     });

  //     // Log the stream object to verify that the media stream is being received
  //     console.log('Media stream:', stream);

  //     if (videoRef.current) {
  //       console.log('VideoRef is valid:', videoRef.current);
  //       videoRef.current.srcObject = stream; // Assign stream to video element
  //     } else {
  //       console.error('videoRef.current is null');
  //     }
  //   } catch (error) {
  //     console.error('Error accessing media devices:', error);
  //     alert('Error accessing the webcam: ' + error.message);
  //   }
  // };
  

  return (
    <div className="chat-room-container">
      {/* Incoming messages list on the side */}
      <div className="incoming-messages">
        <h5>Today's Appointment</h5>
        <ul>
          {incomingMessages.map((msg, index) => (
            <li key={index}><h6><b>{msg.name}</b></h6>
            <h6>{msg.text}</h6>
            </li>
            // <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>

      {/* Main chat area */}
      <div className="chat-area">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg.type === 'text' ? (
                <p>{msg.content}</p>
              ) : (
                <a href="#">{msg.content}</a> /* Display file as a downloadable link */
              )}
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button className='send-btn' onClick={handleSendMessage}>Send</button>

          {/* File attachment */}
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={handleFileAttachment}
          />
          <label htmlFor="file-input" className="file-attachment-btn">
             <h5><BiFile className='file-btn'/> <small>Attach file</small></h5>
          </label>

          {/* Video call button */}
          {/* <video ref={videoRef} autoPlay style={{ width: '640px', height: '480px' }} /> */}
          <button className="video-call-btn" onClick={handleStartVideoCall}>
          <BiVideo/> Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;

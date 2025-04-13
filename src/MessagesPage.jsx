import React, { useState, useEffect } from "react";
import "./MessagesPage.css";
import { FaUserCircle, FaEnvelope, FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MessagesPage = () => {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  
  // Dummy chat data
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Smith",
      status: "Online",
      avatar: "JS",
      unread: 2,
      messages: [
        { id: 1, text: "Hello, I'm interested in donating blood", sender: "them", time: "10:30 AM" },
        { id: 2, text: "When can I come in to donate?", sender: "them", time: "10:31 AM" },
        { id: 3, text: "Hi John! We'd be happy to have you donate. Our center is open from 9 AM to 5 PM on weekdays.", sender: "me", time: "10:45 AM" }
      ]
    },
    {
      id: 2,
      name: "City Hospital",
      status: "Last seen 2h ago",
      avatar: "CH",
      unread: 0,
      messages: [
        { id: 1, text: "We need O- blood urgently", sender: "them", time: "Yesterday" },
        { id: 2, text: "Do you have any donors available?", sender: "them", time: "Yesterday" },
        { id: 3, text: "We've notified all eligible O- donors in our database. Should have responses soon.", sender: "me", time: "Yesterday" },
        { id: 4, text: "Thank you for your quick response!", sender: "them", time: "Yesterday" }
      ]
    },
    {
      id: 3,
      name: "Sarah Johnson",
      status: "Typing...",
      avatar: "SJ",
      unread: 1,
      messages: [
        { id: 1, text: "Hi there, I have a question about blood donation", sender: "them", time: "Mar 13" },
        { id: 2, text: "Is A+ blood type currently needed?", sender: "them", time: "Mar 13" },
        { id: 3, text: "Yes, we're accepting all blood types right now, including A+. Would you like to schedule a donation?", sender: "me", time: "Mar 13" }
      ]
    },
    {
      id: 4,
      name: "Dr. Robert Chen",
      status: "Last seen yesterday",
      avatar: "RC",
      unread: 0,
      messages: [
        { id: 1, text: "Just wanted to let you know", sender: "them", time: "Mar 10" },
        { id: 2, text: "Your donation helped save two lives last week.", sender: "them", time: "Mar 10" },
        { id: 3, text: "That's wonderful news! Thank you for letting me know.", sender: "me", time: "Mar 10" }
      ]
    },
    {
      id: 5,
      name: "Blood Drive Coordinator",
      status: "Online",
      avatar: "BD",
      unread: 0,
      messages: [
        { id: 1, text: "We're organizing a blood drive next Saturday", sender: "them", time: "Mar 8" },
        { id: 2, text: "Would you like to volunteer or participate?", sender: "them", time: "Mar 8" },
        { id: 3, text: "I'd love to volunteer! What time does it start and what role would you like me to take?", sender: "me", time: "Mar 8" }
      ]
    }
  ]);

  // Check for new chat data in navigation state
  useEffect(() => {
    if (location.state && location.state.newChat) {
      const newChat = location.state.newChat;
      
      // Check if chat with this user already exists
      const existingChat = chats.find(chat => chat.name === newChat.name);
      
      if (!existingChat) {
        // Add welcome message to the new chat
        const chatWithWelcome = {
          ...newChat,
          messages: [
            { 
              id: 1, 
              text: `Hello! I'm interested in connecting about blood donation. Can you help?`, 
              sender: "them", 
              time: getCurrentTime() 
            }
          ]
        };
        
        // Add the new chat to the list
        setChats(prevChats => [chatWithWelcome, ...prevChats]);
        
        // Select the new chat
        setSelectedChat(chatWithWelcome);
      } else {
        // If chat already exists, just select it
        setSelectedChat(existingChat);
      }
    }
  }, [location]);

  // Helper function to get current time in AM/PM format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !selectedChat) return;

    const updatedChats = chats.map(chat => {
      if (chat.id === selectedChat.id) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: chat.messages.length + 1,
              text: newMessage,
              sender: "me",
              time: getCurrentTime()
            }
          ]
        };
      }
      return chat;
    });

    setChats(updatedChats);
    setSelectedChat(updatedChats.find(chat => chat.id === selectedChat.id));
    setNewMessage("");
  };

  // Handle keyboard enter to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="messages-container">
      {/* Sidebar with contact list */}
      <div className="messages-sidebar">
        <div className="messages-header">
          <h2>Messages</h2>
          <Link to="" className="home-link">Home</Link>
        </div>
        <div className="messages-search">
          <input type="text" placeholder="Search contacts..." />
        </div>
        <div className="messages-list">
          {chats.map((chat) => (
            <div 
              className={`contact-item ${selectedChat?.id === chat.id ? 'selected' : ''} ${chat.unread > 0 ? 'unread' : ''}`} 
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="contact-avatar">
                {chat.avatar}
              </div>
              <div className="contact-details">
                <div className="contact-header">
                  <h3>{chat.name}</h3>
                  <span className="contact-time">{chat.messages[chat.messages.length - 1].time}</span>
                </div>
                <p className="contact-message">{chat.messages[chat.messages.length - 1].text}</p>
                {chat.unread > 0 && <div className="unread-badge">{chat.unread}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="chat-area">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <div className="chat-contact-info">
                <div className="contact-avatar">{selectedChat.avatar}</div>
                <div>
                  <h3>{selectedChat.name}</h3>
                  <p className="contact-status">{selectedChat.status}</p>
                </div>
              </div>
            </div>
            
            <div className="chat-messages">
              {selectedChat.messages.map((message) => (
                <div 
                  className={`message ${message.sender === 'me' ? 'sent' : 'received'}`} 
                  key={message.id}
                >
                  <div className="message-bubble">
                    <p>{message.text}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chat-input">
              <textarea 
                placeholder="Type a message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="send-button"
                onClick={handleSendMessage}
                disabled={newMessage.trim() === ""}
              >
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <div className="no-chat-content">
              <FaEnvelope size={50} />
              <h3>Select a chat to start messaging</h3>
              <p>Choose from your existing conversations or start a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import MessageList from "./MessageList";

const ChatWindow = () => {
  const { currentUser, messages, addMessage } = useContext(UserContext);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleSend = () => {
    if (newMessage.trim() && currentUser) {
      const message = {
        user: currentUser.userId,
        text: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };
      addMessage(message);
      setNewMessage("");
    }
  };

  if (!currentUser) return null;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl">Home &gt;&gt; Chat Window</h2>
        <div className="text-green-600 font-medium">
          Logged in as: {currentUser.userId}
        </div>
      </div>
      <div className="bg-white rounded-lg  p-6">
        <MessageList messages={messages} currentUser={currentUser} />
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

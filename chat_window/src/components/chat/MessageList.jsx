const MessageList = ({ messages, currentUser }) => {
  console.log(messages)
  console.log(currentUser)
    return (
      <div className="h-[50vh] border rounded p-4 mb-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-2 ${message.user === currentUser.userId ? 'text-blue-600' : 'text-gray-700'}`}
          >
            <span className="font-bold">{message.user}&gt;</span>
            <span>{message.text}</span>
            <span className="text-xs text-gray-500 ml-2">{message.timestamp}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageList;
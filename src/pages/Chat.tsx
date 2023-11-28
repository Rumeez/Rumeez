import React, {useState, ChangeEvent} from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { MenuButton } from '../utils';


interface MessageBoxProps {
  onSendMessage: (message: string) => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>('');

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage(''); // Clear the message input after sending
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

interface ChatProps {
    setSelected_page: (input: string) => void
    accessSelected_option: () => string
    setFlagTo_true: () => void
    setFlagTo_false: () => void
}

const Chat: React.FC<ChatProps> = ({setSelected_page, accessSelected_option, setFlagTo_true, setFlagTo_false}) => {
    
    const sendMessage = (message: string) => {
        console.log('Sending message:', message);
      };

    return(
        <div>

                <div>
                    <MenuButton 
                        setSelected_page={setSelected_page}
                        accessSelected_option={accessSelected_option}
                        setFlagTo_true={setFlagTo_true}
                        setFlagTo_false={setFlagTo_false}
                    />
                </div>
                        <h1> Message Users </h1>
                <div> 
                        <MessageBox onSendMessage={sendMessage} />
                </div>
        </div>
    );
}

export default Chat
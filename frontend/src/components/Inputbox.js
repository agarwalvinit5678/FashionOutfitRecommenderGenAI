import '../index.css';
import axios from "axios";
import { useState } from 'react';
import PreviousChat from './Previouschat';
import ProductBox from './ProductBox';

function Inputbox() {
  const [prompt, setPrompt] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  function postdata(e) {
    e.preventDefault();

    axios.post('api/getprompt', {
      prompt: prompt,
    })
    .then((response) => {
      console.log("Prompt posted");
      console.log(response);

      // Handle both string and array responses
      if (typeof response.data === "string") {
        setChatMessages(prevMessages => [...prevMessages, { type: "string", message: response.data }]);
      } else if (Array.isArray(response.data)) {
        setChatMessages(prevMessages => [...prevMessages, { type: "array", message: response.data }]);
      }

      // Clear the prompt input
      setPrompt("");
    })
    .catch((error) => {
      console.log(error);
    });
  } 

  return (
    <div className='containerinput' >
      <div className="messages-container">
        {chatMessages.map((message, index) => (
          <MessageRenderer key={index} message={message} />
        ))}
      </div>
      <form className="search-wrapper cf" onSubmit={postdata}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="textbox"
          type="text"
          placeholder="Prompt"
        />
        <button className="Go-button" type="submit">Go</button>
      </form>
    </div>
  );
}

const MessageRenderer = ({ message }) => {
  if (message.type === "string") {
    return <PreviousChat text={message.message} />;
  } else if (message.type === "array") {
    return <ProductBox array={message}/>;
  }
  return null; // Handle other cases if needed
}

export default Inputbox;

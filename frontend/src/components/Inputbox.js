// Import necessary components and libraries
import '../index.css';
import PreviousChat from './Previouschat';
import ProductBox from './ProductBox';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

// Define the Inputbox component
function Inputbox() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const lastResponseRef = useRef();

  // Function to send user's prompt to the AI model
  const postdata = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('http://127.0.0.1:8000/prompt', {
      text: prompt,
    })
    .then((response) => {
      console.log('Prompt posted');
      console.log(response.data);

      // Add user's prompt and AI's response to the list of responses
      setResponses(prevResponses => [
        ...prevResponses,
        { prompt: 'You: ' + prompt, response: 'AI: ' + response.data.message, suggest: response.data.suggest, links: response.data.links }
      ]);

      // Clear input and focus it
      setPrompt('');
      inputRef.current.focus();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  // Scroll to the last response when new responses are added
  useEffect(() => {
    if (lastResponseRef.current) {
      lastResponseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [responses]);

  return (
    <div className='container'>
      <div className='responses-container'>
        {/* Map through responses and display them */}
        {responses.map((entry, index) => (
          <ResponseComponent
            key={index}
            prompt={entry.prompt}
            response={entry.response}
            suggest={entry.suggest}
            links={entry.links}
            ref={index === responses.length - 1 ? lastResponseRef : null}
          />
        ))}
      </div>
      {/* Form to input prompts */}
      <form className='search-wrapper cf' onSubmit={postdata}>
        <input
          ref={inputRef}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className='textbox'
          type='text'
          placeholder='Prompt'
          disabled={loading} // Disable input while loading
        />
        {/* Render the Go button when not loading */}
        {!loading && <button className='Go-button' type='submit'>Go</button>}
      </form>
      {/* Display loading indicator when loading */}
      {loading && <div className='loading-indicator'>Loading...</div>}
    </div>
  );
}

// Define the ResponseComponent
const ResponseComponent = React.forwardRef(({ prompt, response, suggest, links }, ref) => (
  <div ref={ref}>
    <div className="response">
      <div className="user-response">
        {/* Display the user's prompt */}
        <PreviousChat text={prompt} isPrompt={true} />
      </div>
      <div className="ai-response">
        {/* Display the AI's response */}
        <PreviousChat text={response} />
      </div>
      {/* Display suggested products if available */}
      {suggest === 'true' && <ProductBox products={links} />}
    </div>
  </div>
));

// Export the Inputbox component
export default Inputbox;

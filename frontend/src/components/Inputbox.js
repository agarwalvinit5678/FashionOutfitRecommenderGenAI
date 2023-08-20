import '../index.css';
import PreviousChat from './Previouschat';
import ProductBox from './ProductBox';
import React, { useState } from 'react';
import axios from 'axios';

function Inputbox() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const postdata = (e) => {
    e.preventDefault();

    axios.post('api/getprompt', {
      prompt: prompt,
    })
    .then((response) => {
      console.log('Prompt posted');
      console.log(response.data); // Make sure to access the response data

      // Add the new response to the list of responses
      setResponses(prevResponses => [...prevResponses, response.data]);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='containerinput'>
      <form className='search-wrapper cf' onSubmit={postdata}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className='textbox'
          type='text'
          placeholder='Prompt'
        />
        <button className='Go-button' type='submit'>
          Go
        </button>
      </form>

      {responses.map((response, index) => (
        <ResponseComponent key={index} response={response} />
      ))}
    </div>
  );
}

function ResponseComponent({ response }) {
  return (
    <div>
      <PreviousChat text={response.message} />
      {response.suggest && <ProductBox array={response.links} />}
    </div>
  );
}

export default Inputbox;

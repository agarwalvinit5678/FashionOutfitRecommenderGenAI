import '../index.css';
import PreviousChat from './Previouschat';
import ProductBox from './ProductBox';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

// function Inputbox() {
//   const [prompt, setPrompt] = useState('');
//   const [responses, setResponses] = useState([]);
//   const inputRef = useRef();
//   const lastResponseRef = useRef();

//   const postdata = (e) => {
//     e.preventDefault();

//     axios.post('http://127.0.0.1:8000/prompt', {
//       text: prompt,
//     })
//     .then((response) => {
//       console.log('Prompt posted');
//       console.log(response.data); // Make sure to access the response data

//       // Add the new response to the list of responses
//       setResponses(prevResponses => [
//         ...prevResponses,
//         { prompt: 'You: ' + prompt, response: 'AI: ' + response.data.message, suggest: response.data.suggest, links: response.data.links }
//       ]);

//       // Clear input and focus it
//       setPrompt('');
//       inputRef.current.focus();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   };

//   useEffect(() => {
//     // Scroll to the last response after it's been added
//     if (lastResponseRef.current) {
//       lastResponseRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [responses]);

//   return (
//     <div className='container'>
//       <div className='responses-container'>
//         {responses.map((entry, index) => (
//           <ResponseComponent
//             key={index}
//             prompt={entry.prompt}
//             response={entry.response}
//             suggest={entry.suggest}
//             links={entry.links}
//             ref={index === responses.length - 1 ? lastResponseRef : null}
//           />
//         ))}
//       </div>
//       <form className='search-wrapper cf' onSubmit={postdata}>
//         <input
//           ref={inputRef}
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           className='textbox'
//           type='text'
//           placeholder='Prompt'
//         />
//         <button className='Go-button' type='submit'>
//           Go
//         </button>
//       </form>
//     </div>
//   );
// }
function Inputbox() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const lastResponseRef = useRef();

  const postdata = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('http://127.0.0.1:8000/prompt', {
      text: prompt,
    })
    .then((response) => {
      console.log('Prompt posted');
      console.log(response.data);

      setResponses(prevResponses => [
        ...prevResponses,
        { prompt: 'You: ' + prompt, response: 'AI: ' + response.data.message, suggest: response.data.suggest, links: response.data.links }
      ]);

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

  useEffect(() => {
    if (lastResponseRef.current) {
      lastResponseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [responses]);

  return (
    <div className='container'>
      <div className='responses-container'>
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
        {!loading && <button className='Go-button' type='submit'>Go</button>} {/* Render the Go button when not loading */}
      </form>
      {loading && <div className='loading-indicator'>Loading...</div>}
    </div>
  );
}



const ResponseComponent = React.forwardRef(({ prompt, response, suggest, links }, ref) => (
  <div ref={ref}>
    <div className="response">
      <div className="user-response">
        <PreviousChat text={prompt} isPrompt={true} />
      </div>
      <div className="ai-response">
        <PreviousChat text={response} />
      </div>
      {suggest === 'true' && <ProductBox products={links} />}
    </div>
  </div>
));




export default Inputbox;

// Import the necessary CSS styles
import '../index.css';

// Define the PreviousChat component for displaying chat text
function PreviousChat(props) {
  // Split the text into parts based on 'You:' and 'AI:' markers
  const textParts = props.text.split(/(You:|AI:)/);

  return (
    // Chat container with conditional class for prompt text
    <div className={`chatt ${props.isPrompt ? 'prompt-text' : ''}`} style={{ whiteSpace: 'pre-line' }}>
      {/* Map through text parts */}
      {textParts.map((part, index) =>
        // Check if part is 'You:' or 'AI:' marker
        part === 'You:' || part === 'AI:' ? (
          // Display marker with bold styling
          <strong key={index} style={{ fontWeight: 'bold' }}>
            {part}
          </strong>
        ) : (
          // Display chat text
          <>
            &nbsp; {/* Add space before text */}
            {/* <br /> Add a newline before text */}
            {part}
          </>
        )
      )}
    </div>
  );
}

// Export the PreviousChat component
export default PreviousChat;

import '../index.css';

function PreviousChat(props) {
  const textParts = props.text.split(/(You:|AI:)/);

  return (
    <div className={`chatt ${props.isPrompt ? 'prompt-text' : ''}`} style={{ whiteSpace: 'pre-line' }}>
      {textParts.map((part, index) =>
        part === 'You:' || part === 'AI:' ? (
          <strong key={index} style={{ fontWeight: 'bold' }}>
            {part}
          </strong>
        ) : (
          <>
          &nbsp;
            {/* <br /> Add a newline before text */}
            {part}
          </>
        )
      )}
    </div>
  );
}

export default PreviousChat;
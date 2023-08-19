import '../index.css';
function Inputbox() {
  return (
        <div className='containerinput' >
           <form className="search-wrapper cf">
                <input className="textbox" type="text" placeholder="Prompt" />
                <button className="Go-button" type="submit">Go</button>
            </form>
        </div>
  );
}

export default Inputbox;
import logo from './logo.svg';
import './App.css';
import Inputbox from './components/Inputbox';
import PreviousChat from './components/Previouschat';
import ProductBox from './components/ProductBox';
function App() {
  return (
    <div className="App">
      <PreviousChat text="bnm,"></PreviousChat>
      <ProductBox></ProductBox>
      <PreviousChat text="bnmjnjnfjnfjnj"></PreviousChat>
      <div className='Prompt'>
        <Inputbox></Inputbox>
      </div>
      
    </div>
  );
}

export default App;

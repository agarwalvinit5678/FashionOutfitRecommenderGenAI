import logo from './logo.svg';
import './App.css';
import Inputbox from './components/Inputbox';
import PreviousChat from './components/Previouschat';
import ProductBox from './components/ProductBox';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <PreviousChat text="bnm,"></PreviousChat> */}
      {/* <ProductBox products={products}></ProductBox> */}
      {/* <PreviousChat text="bnmjnjnfjnfjnj"></PreviousChat> */}
      {/* <Navbar></Navbar> */}
      <div className='Prompt'>
        <Inputbox></Inputbox>
      </div>
      
    </div>
  );
}

export default App;

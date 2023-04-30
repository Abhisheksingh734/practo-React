// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (  
    <>
  <Navbar title="TextUtils" aboutText = "About texUtils"/>
  <div className='container my-5'>

  <TextFrom heading="Enter the text to analyse below"/>
  </div>
    </>
  );
}

export default App;

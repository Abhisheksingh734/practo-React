// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (  
    <>
  <Navbar title="Titieeee" aboutText = "About texUtils"/>
  <div className='container my-5'>

  <TextFrom heading="Enter the text to analyse below"/>
  {/* <About/> */}
  </div>
    </>
  );
}

export default App;

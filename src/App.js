
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
   
<Navbar title="TEXTit" about="about"/>
<div className='container my-3'>
  <TextForm heading="enter the text to analyze"/></div>
    </>
  );
}

export default App;

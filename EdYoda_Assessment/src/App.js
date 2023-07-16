import './App.css';
import BackGroundImge from './Components/BackGround/BackGroundImge';
import InstructionSteps from './Components/Instruction/InstructionSteps';
import Index from './Components/MainCard/Index';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
     <BackGroundImge/>
     <Navbar/>
     <InstructionSteps/>
     <Index/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './Hello.js';
import Hello from './Hello.js';

function App({name,age}) {
  return <div>
            Hello World from app.js {name} Age ={age}
            <br></br>
            <Hello fname={name}></Hello>
         </div>
}

export default App;


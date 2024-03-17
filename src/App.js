import { useState } from 'react';
import './App.css';
import Startgame from './Compenents/Startgame' ;
import Gamestart from './Compenents/Gamestart' ;

function App() {
  const [gamestate,setgamestate] = useState(false);
  const togglestate = () =>{
    setgamestate((prev)=> (!prev));
  }
    
  return (
    <div>
      {gamestate ?<Gamestart/> : <Startgame toggle={togglestate}/>}
    </div>
  );
}

export default App;

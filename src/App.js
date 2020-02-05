import React from 'react';
import NavBar from './components/Navbar'
import Vl from  './components/VerticalLine'
import Home from './sections/Home'
import Events from './sections/Events'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Vl className='vl' color='#4DEDFF'/>  */}
      <div className='sectionOneToThree'>
       <Home />
       <Events />

      </div>



    </div>
  );
}

export default App;

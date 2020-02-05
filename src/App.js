import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NavBar from './components/Navbar'
import Vl from  './components/VerticalLine'
import Home from './sections/Home'
import Events from './sections/Events'
import {initMembers} from './reducers/memberReducer'

function App(props) {
  useEffect(()=>{
    console.log(initMembers)
    props.initMembers()
  },[])
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

export default connect(null, {initMembers} )(App)

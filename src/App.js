import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Vl from  './components/VerticalLine'
import Home from './sections/Home'
import Events from './sections/Events'
import Members from './components/sections/Members'
import {initMembers} from './reducers/memberReducer'


//test imports 

import InputField from './components/InputField'


import './sass/components/App.scss'

function App(props) {
  useEffect(()=>{
    console.log(initMembers)
    props.initMembers()
  },[])
  return (
    <div className="App">
      {/* <NavBar />
      <Vl className='vl' color='#4DEDFF'/> 
      <div className='sectionOneToThree'>
       <Home />
       <Events />

      </div>
      <div className='sectionTwo'>
        <Members />
      </div>

      <Footer />  */}

    <InputField />


    </div>
  );
}

export default connect(null, {initMembers} )(App)

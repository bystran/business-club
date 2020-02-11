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
import RecruitForm from './components/RecruitForm'


import './sass/components/App.scss'

function App(props) {
  useEffect(()=>{
    console.log(initMembers)
    props.initMembers()
  },[])
  return (
    <div className="App">
      <NavBar />
      
      <div className='sectionOneToThree'>
       <Vl 
       className='vl' 
       color='#4DEDFF'
       sections={[
        {title: '01', top: '20px'},
        {title: '02', top: '600px'},
        {title: '03', top: '1050px'}
        ]}
       /> 
       <Home />
       <Events />

      </div>
      <div className='sectionTwo'>
        <Vl 
        className='vl' 
        color='#2C3E50'
        sections={[
          {title: '04', top: '120px'},
          {title: '05', top: '600px'},

        ]}
        
        /> 
        <Members />
        <RecruitForm />

      </div>
            

      <Footer /> 




    </div>
  );
}

export default connect(null, {initMembers} )(App)

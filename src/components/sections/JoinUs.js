import React from 'react'
import RForm from '../RecruitForm'
import Paragraph from '../Paragraph'

import '../../sass/sections/JoinUs.scss'


const JoinUs = () => {


    return(
        <div className='join-us-container'>

            <Paragraph 
            heading='Like what you see?'
            >
                Join us! Fill in the form below, and get the 
                benefits of being a memeber.  
            </Paragraph>
            <div className='flex-break'></div>
            <div className='form'>
                <h2>Become Member</h2>
  
                <RForm />
            </div>



        </div>
    )

}


export default JoinUs
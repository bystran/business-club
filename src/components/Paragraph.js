import React from 'react'
import Underlined from './Underlined'

import '../sass/components/Paragraph.scss';



const Paragraph = (props) => {

    return(
        <div className='paragraph-wrapper'>

                <Underlined
                    marginLeft = '-10%'
                >
                    <h1> {props.heading}</h1>
                </Underlined>
                <p>
                    {props.children}
                </p>
        </div>
    )
}


export default Paragraph
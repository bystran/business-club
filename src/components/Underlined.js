import React from 'react'
import '../sass/underlined.scss'

const Underlined = (props) => {
    const style = {
        marginLeft:props.marginLeft,
    }


    return(
        <div className='underlined-cmp'>
            <div className='content'>{props.children}</div>
            <hr style={style}/>
        </div>  
    )
}



export default Underlined
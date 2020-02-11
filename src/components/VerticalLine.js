import React from 'react'


const VerticalLine = (props) => {
    const sections = props.sections 

    const style = {
        borderLeft:`1px solid ${props.color || 'black'}`,
    }
    const labelStyle ={
        display:'flex',
        alignItems:'center',
        position:'absolute'
    }
    

    return (
        <div 
            className={ props.className }
            style = { style }

        >
            <div style={{position:'relative'}}>
                {
                    sections !== undefined &&
                    sections.map((s,index)=>{
                        const width = `${25*(1+((index+1) % 2))}px`
                        console.log(width)
                        return(
                        <div style={{...labelStyle, top:s.top}} key={index}>
                            <hr 
                                style={{width: width, marginRight:'10px', borderColor: props.color}}
                            /> 
                            <h3>{s.title}</h3>
                        </div>
                        )
                    }
                    )
                }
                
            </div>

        </div>
    )
}

export default VerticalLine
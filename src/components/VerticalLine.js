import React from 'react'


const VerticalLine = (props) => {
    const sections = [
        {title: '01', top: '100px'},
        {title: '02', top: '300px'}
    ]

    const style = {
        borderLeft:`1px solid ${props.color || 'black'}`,
        height: props.height || '100%'
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
                    sections.map((s,index)=>{
                        const width = `${25*(1+((index+1) % 2))}px`
                        console.log(width)
                        return(
                        <div style={{...labelStyle, top:s.top}} key={index}>
                            <hr 
                                style={{width: width, marginRight:'10px'}}
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
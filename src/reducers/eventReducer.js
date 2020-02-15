import eventsService from '../services/events.js'



export const initEvents = () =>{
    return async dispatch => {
        try{
            const res = await eventsService.getEvents()
            dispatch({
                type:'INIT-EVENTS',
                events: res
            })
        }catch(e){
            console.log(e)
        }

    }
}




const reducer = ( state = [], action) => {

    
    switch (action.type) {
        case 'INIT-EVENTS':
            return action.events
        default:
            return state    

    }

}




export default reducer
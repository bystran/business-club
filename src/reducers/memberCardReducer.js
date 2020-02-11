// const initMemeb = {
//     "id":12,
//     "name":"Sonicka Niaka", "img":"/sonicka.jpg", "position":"Vice President",
//     "degree":"Ba. Marketing", "fb":"link", "li":"link",
//     "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
// }
export const hideMembCard = (delay) => {

    return async dispatch => {
        await setTimeout(()=>{
            dispatch({
                type:'HIDE-MEMB-CARD',
            })
        },delay)


    }
}

export const showMembCard = (member) => {

    return dispatch => {
        dispatch({
            type:'SHOW-MEMB-CARD',
            member
        })

    }
}

const reducer = ( state = null, action) => {
    switch (action.type) {
        case 'HIDE-MEMB-CARD':
            return null
        case 'SHOW-MEMB-CARD':
            return action.member
        default:
            return state
    }

}



export default reducer
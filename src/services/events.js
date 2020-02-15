import axios from 'axios'

const base_url = "https://uee5zunrv2.execute-api.eu-west-2.amazonaws.com/default/getFBEvents-dev"

const getEvents = async () => {
    try{
        const res = await axios.get(base_url,{
        });
        return res.data
    }catch(e){
        console.log(e)
    }
} 


export default {
    getEvents
}
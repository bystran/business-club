

exports.handler = async (event) => {
    const headers= {
        "Access-Control-Allow-Origin": "http://localhost:3000"
    }
    try{
        const axios = require('axios')
        const params = {
            access_token: process.env.FB_KEY,
            fields: 'name, start_time',
            time_filter:'upcoming'
        }
        const base_url = "https://graph.facebook.com/v6.0/"+process.env.PAGE_ID+"/events"

    

        const res  = await axios.get(base_url,{
            params:params,
        })
        if(res !== undefined && res.data!== undefined && res.data.data!=undefined){
            const response = {
                statusCode: 200,
                headers:headers,
                body: JSON.stringify(res.data.data)
            }
            return response
        }else{
            const response = {
                statusCode: 500,
                headers
            };
            
            return response
        }


    }catch(e){
        console.log(e)
        
        const response = {
            statusCode: 500,
            headers,

        };

        return response

    }
};

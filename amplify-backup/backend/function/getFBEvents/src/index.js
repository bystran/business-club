

exports.handler = async (event) => {
    const headers= {
        "Access-Control-Allow-Origin": process.env.BASE_URL
    }
    try{
        const axios = require('axios')
        const params = {
            access_token: process.env.AMPLIFY_FB_ACCESS_TOKEN,
            fields: 'name, start_time',
        }
        const base_url = "https://graph.facebook.com/v6.0/"+process.env.AMPLIFY_FB_PAGE_ID+"/events"

    

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

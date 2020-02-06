const request = require("request");

const forecast = (latitude,longitude,callback) =>{

    const url = `https://api.darksky.net/forecast/d375c9bfe82f06660d05faac6f12d15b/${latitude},${longitude}`;

    request({url:url,json:true},(error,response)=>{

        if(error)
        {
           callback('Unable to connect to the internet',undefined); 
        }
        else if(response.body.error)
        {
            callback('Invalid name please retry',undefined);
        }
        else{
            callback(undefined,{
                summary:response.body.daily.data[0].summary,
                tempertature:response.body.currently.temperature,
                probability:response.body.currently.precipProbability
            })
        }
    })

}


module.exports = forecast;
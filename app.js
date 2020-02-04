const request = require('request');

const url = 'https://api.darksky.net/forecast/d375c9bfe82f06660d05faac6f12d15b/37.8267,-122.4233?lang=es';

request({url:url,json:true},(error,response)=>{
    console.log(response.body.daily.data[0].summary);
    console.log('It is currently '+response.body.currently.temperature+' degrees out.');
    console.log('There is a '+response.body.currently.precipProbability+'% chance of rain.');
})
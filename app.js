const request = require('request');


const getTemps = (cordinate) =>{
const url = `https://api.darksky.net/forecast/d375c9bfe82f06660d05faac6f12d15b/data1,data2?lang=es`;
var usrres = url.replace('data1',cordinate[1]);
usrres =  usrres.replace('data2',cordinate[0]);
console.log(usrres);
request({url:usrres,json:true},(error,response)=>{
    console.log(response.body.daily.data[0].summary);
    console.log('It is currently '+response.body.currently.temperature+' degrees out.');
    console.log('There is a '+response.body.currently.precipProbability+'% chance of rain.');
})

}
//GeoCoding

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYm9ya2Fyc2Fpc2g3IiwiYSI6ImNrNjg0NHF5NDAxNWkzbHA3ZHQ1cGhwcDAifQ.bEInlkLCEfZHKFyub31qKw&limit=1';
request({url:url2,json:true},(error,response)=>{
const cordinate = response.body.features[0].center;
console.log('Coordinates are '+cordinate);
getTemps(cordinate);
})

console.log('added 2 API');
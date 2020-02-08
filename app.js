const geocode = require('./util/geocode');
const forecast = require('./util/forecast');
const address = process.argv[2];

if(!address)
{
  console.log('Please Provide an address');

}
else {
geocode(address,(error,{latitude,longitude,location})=>{
if(error)
{
  return console.log(error);
}
forecast(latitude,longitude,(error, {summary,temperature,probability}) => {
 
        if(error)
    {
        return console.log(error);
      }
      console.log(location);
      console.log('The day will be '+summary+'It will be '+ temperature +' Fareingeight. There is '+probability+'% chance of rain');
})

})

}

const geocode = require('./util/geocode');
const forecast = require('./util/forecast');

geocode('Pune',(error,data)=>{
console.log('Error',error);
console.log('Data',data);

})
forecast(18.52361,73.84778,(error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
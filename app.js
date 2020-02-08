const geocode = require('./util/geocode');
const forecast = require('./util/forecast');

geocode('Margao',(error,data)=>{
console.log('Error',error);
console.log('Data',data);
forecast(data.latitude,data.longitude,(error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

})

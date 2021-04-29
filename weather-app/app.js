const request=require('request')
const geoCode=require('./utils/geocode')

// const url="http://api.weatherstack.com/current?access_key=f3212a27055c3e424f9062bb6bddbd0c&query=&units=f"

// request({url:url,json:true},(error,response)=>{
//     //console.log(response.body.current)
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('Current temp is '+resp.temperature+' degrees but feels like it is '+ resp.feelslike+' degrees')
//     }
       
// })

//Geo coding

const mapBoxUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/12undertaker.json?access_token=pk.eyJ1IjoiaGl0bWFuMjAwNiIsImEiOiJja28ybWN2ZjYwM2RnMndtdXd3cHN1OXg5In0.8VpR-poOVftYQB8X2C1arA&limit=1"

geoCode('New Delhi',(error,data)=>{
    debugger;
    console.log('Error:-'+error)
    console.log('Data:-'+data)
    console.log('Latitude and longitue are here respectively- ' +data.latitude +' and '+data.longitude+' and location is '+data.location)
})
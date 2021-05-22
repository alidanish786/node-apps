const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    debugger
    const url='http://api.weatherstack.com/current?access_key=f3212a27055c3e424f9062bb6bddbd0c&query='+latitude+
    ','+longitude+'&units=f'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}
module.exports=forecast


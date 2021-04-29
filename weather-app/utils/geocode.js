const request=require('request')

const geoCode=(address,callback)=>{
    debugger
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGl0bWFuMjAwNiIsImEiOiJja28ybWN2ZjYwM2RnMndtdXd3cHN1OXg5In0.8VpR-poOVftYQB8X2C1arA&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }
        else if(response.body.features.length===0){
            callback('Unable to find matching location',undefined)
        }
        else{
            const resp=response.body
            //console.log(resp)
            //console.log('Latitude and longitue are here respectively- ' +resp.features[0].center[0] +' and '+ resp.features[0].center[1])
            callback(undefined,{
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }
    
    })
}
module.exports=geoCode
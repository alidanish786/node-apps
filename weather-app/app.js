const forecast = require('./utils/forecast')
const geoCode=require('./utils/geocode')
const chalk=require('chalk')

const loc=process.argv[2];
//console.log(loc[2])

if(loc!="" && loc!=undefined){

    geoCode(loc,(error,{location,latitude,longitude})=>{
        debugger;
        console.log('Error:-'+error)
        //console.log('Data:-'+data)
        console.log('Latitude and longitue are here respectively- ' 
        +latitude +' and '+longitude+' and location is '+location)
    
        forecast(latitude,longitude, (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
          })
    })
    
}
else{
console.log(chalk.red('No parameter provided in command!'))
}


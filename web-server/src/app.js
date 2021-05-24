// const path = require('path')
// const express = require('express')
// const hbs=require('hbs')

// const geoCode=require('./utils/geocode')
// const foreCast=require('./utils/forecast')

// const app = express()

// //Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../public')
// const jsDirectoryPath = path.join(__dirname, '../js')
// const viewsDirectoryPath = path.join(__dirname, '../templates/views')

// const partialsPath = path.join(__dirname, '../templates/partials')

// //Setup handlebars engine and views location
// app.set('views', path.join(viewsDirectoryPath))
// app.set('view engine', 'hbs')


// hbs.registerPartials(partialsPath)
// debugger

// //Setup static directory to serve
// app.use('/public',express.static(publicDirectoryPath))
// // app.use('/js',express.static(jsDirectoryPath))

// app.get('', (req, res) => {
//     debugger
//     res.render('index', {
//         title: 'Weather',
//         name: 'Mohd Danish',
//         footerName:'Danish'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Mohd Danish',
//         footerName:'Danish'
//     })
// })

// app.get('/weather', (req, res) => {
//     debugger;
//     if(!req.query.address){
//             res.send({
//                 error:'No address specified'
//             })
//     }
//     else{

//         geoCode(req.query.address,(error,{latitude,longitude,location})=>{
//               if(error){
//                 res.send({ error})
//               } 
//               else{
//                   foreCast(latitude,longitude,(error,forecastString)=>{
//                     if(error){
//                         res.send({ error})
//                       } 
//                       else
//                         res.send(forecastString)
//                   })
//               }
//         })

    
//     }
    
// })

// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help page',
//         helpText: 'This is some helpful text.',
//         footerName:'Danish'
//     })
// })

// app.get('/help/*', (req, res) => {
//     res.render('404',{
//         errorMessage:'Help article not found!!'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404',{
//         errorMessage:'Page not found!!'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port=process.env.PORT || 3000

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mohd Danish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mohd Danish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Mohd Danish'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mohd Danish',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mohd Danish',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port :'+port)
})
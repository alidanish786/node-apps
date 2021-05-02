const path = require('path')
const express = require('express')
const hbs=require('hbs')
const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('views', path.join(viewsDirectoryPath))
app.set('view engine', 'hbs')


hbs.registerPartials(partialsPath)


//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead',
        footerName:'Danish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead',
        footerName:'Danish'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        helpText: 'This is some helpful text.',
        footerName:'Danish'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        errorMessage:'Help article not found!!'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        errorMessage:'Page not found!!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
const express=require('express')
const path=require('path')

const app=express()

const directory=path.join(__dirname,'../public')

app.use(express.static(directory))

// app.get('',(req,res)=>{
//     res.send('Hi Express')
// })

// app.get('/help',(req,res)=>{
//     res.send('Hi Express help')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })

app.get('/wheather',(req,res)=>{
    res.send({
        forecast:'30 degrees',
        location:'Delhi'
    })
})


app.listen(3000,()=>{
    console.log('Server is started at 3000 port')
})
require('dotenv').config()
const express = require('express') // import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!') // http:localhost:3000/
})

app.get('/balaji', (req, res)=>{
    res.send('this is balaji gapat...!!!') // http:localhost:3000/balaji
})

app.get('/login', (req, res)=>{
    res.send('<h1>this is h1 tag...!!!</h1>') // http:localhost:3000/login
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>chai aur code...!!!</h2>") // http:localhost:3000/youtube
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
require("dotenv").config()
const express = require('express');
const axios = require('axios')
const app = express()
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=London"
console.log(process.env.API_KEY)
app.get('/', (req,res)=> {
    res.send("Hello Api")
})
app.get('/data', async(req,res,next)=>{
    try {
        if(!process.env.API_KEY){
            throw new Error("Your forgot the API Key")
        }
    const result = await axios.get(apiUrl, {
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    })
    res.json(result.data)
    }
    catch (err){
        next(err)
    }
})
app.listen(3000, ()=> {
    console.log("started")
})
/*fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=> res.json())
.then((data) => renderImage(data))

function renderImage(image){
  const dogImage = document.createElement("img")
  dogImage.src = image.message;
  dogImage.width = 120;
  dogImage.height = 120;
  const div1 = document.querySelector(".container")
  div1.append(dogImage)
}

fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=7f015e291d54592e9315dfc3dbfa86a0", {
  mode: "no-cors",
})
.then((data)=> console.log(data))


*/

# HidingAnAPIKey

Hiding an API key is very important so that people cannot access your data, or make request that could potentially charge you

We will hide an API key using express, axios, and dotenv

# Steps
1. Start with npm init in your repo, this will create a package.json file
```
npm init -y
```

2. Then install express, axios, and dotenv as follows:

```
npm install express

npm install axios

npm install dotenv
```

3. Create a .env file, and set your api key to a variable
```
API_KEY = 7f015e291d54592e9315dfc3dbfa86a0
```

4. Create a js file, and this is where you will require axios, express, and dotenv. You will also make your fetch request in the file as well, and include the api key in the headers, using process.env
```
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
```

5. In your package.json update your script object as follows:
```
"scripts": {
    "start": "node index.js"
  }
```
6. To start the server run the following command
```
yarn start
```
7. Then open your browser and request your data using localhost and your get route:
The example uses localhost:3000/ and localhost:3000/host

8. To then hide your api key on github, create a .gitignore file, and hide the .env file as follows:

```
.env
```

9. Push to github


# Resources

[Walkthrough Video](https://monsterlessons-academy.com/posts/how-to-hide-api-keys-with-node-js)




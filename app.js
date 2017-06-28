
const http= require('http')
const weather= require('./weather.js')
const router= require('./router.js')

http.createServer((req, res)=>{

    router.home(req, res)


}).listen(8000);


// const query= process.argv.slice(2)

// weather.get(query)

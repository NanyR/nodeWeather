
const http= require('http')
const key= require('./api.json')
const request = require('request')
const requestProm = require('request-promise');




const getWeather= ()=>{
  requestProm('http://ipinfo.io')
  .then((data)=> {
    const info=JSON.parse(data)
    return info
      // return(info['postal'])
  })
  .then((data)=>{requestProm(`http://api.wunderground.com/api/${key.key}/conditions/q/$sd.json`)
  .then( (response)=>{
    var res=JSON.parse(response)
    if(res.response.error){
      console.log(res.response.error.description)
    }
    // console.log(res.current_observation.display_location.full)
    // console.log(res.current_observation.weather)
    // console.log(res.current_observation.temperature_string)

  })
  .catch(function(err){
    console.log(err)
  })
})
  .catch(function(err){
    console.log(err)
  })
// const requestPromise= http.get(`http://api.wunderground.com/api/${key.key}/conditions/q/${zip}.json`,  (response)=>{
//         if(response.statusCode ===200){
//           let body=""
//           response.on('data', (data)=>{
//             body+=data.toString()
//             })
//           response.on('end', ()=>{
//               const info= JSON.parse(body)
//               if(info.response.error){
//                 const statusCodeError= new Error(`We couldn't find a location for zip code ${zip}, please try another location`)
//                 console.error(statusCodeError.message)
//                 }else{
//                   print(info)
//                 }
//             })
//           response.on('error', ()=>{
//             console.error('There was a problem processing you request')
//           })
//         }else{
//           const statusCodeError= new Error(`There was a problem processing you request").(${http.STATUS_CODES[response.statusCode]}`)
//           console.error(statusCodeError)
//         }
//     })


}



module.exports.get= getWeather

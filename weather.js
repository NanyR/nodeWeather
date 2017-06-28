
const http= require('http')
const key= require('./api.json')
const request = require('request')



const print=(data)=>{
  const info= `City: ${data.current_observation.display_location.city} \nState: ${data.current_observation.display_location.state} \n${data.current_observation.weather} \n${data.current_observation.temperature_string} `
  console.log(info)
}



const getWeather= ()=>{
  const zip;
  request('http://ipinfo.io', function(error, res, body) {
    const info=JSON.parse(body)
    zip=info['postal']
  })

  try{
    const request= http.get(`http://api.wunderground.com/api/${key.key}/conditions/q/${zip}.json`,  (response)=>{
        if(response.statusCode ===200){
          let body=""
          response.on('data', (data)=>{
            body+=data.toString()
            })
          response.on('end', ()=>{
              const info= JSON.parse(body)
              if(info.response.error){
                const statusCodeError= new Error(`We couldn't find a location for zip code ${zip}, please try another location`)
                console.error(statusCodeError.message)
                }else{
                  print(info)
                }
            })
          response.on('error', ()=>{
            console.error('There was a problem processing you request')
          })
        }else{
          const statusCodeError= new Error(`There was a problem processing you request").(${http.STATUS_CODES[response.statusCode]}`)
          console.error(statusCodeError)
        }
    })
  }catch(e){
    console.error(e.message)
  }

}



module.exports.get= getWeather

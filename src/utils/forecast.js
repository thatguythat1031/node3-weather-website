const request = require('request')

//add high and low daily value.

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/61d4b51d04eda552406d0010ad3349f3/' +latitude +',' +longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The high for today is ${body.daily.data[0].temperatureMax}. The low for today is ${body.daily.data[0].temperatureMin}.`)
        }
    })
}

module.exports = forecast

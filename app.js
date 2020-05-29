getCountry('BR').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

getLocation().then((data) => {
    console.log(`You are currently in ${data.city}, ${data.region} - ${data.country}!`)
}).catch((error) => {
    console.log(error)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

getCurrentLocation().then((country) => {
    console.log(country.name)
}).catch((error) =>  {
    console.log(`Error: ${error}`)
})
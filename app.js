getLocation().then((data) => {
    console.log(`You are currently in ${data.city}, ${data.region} - ${data.country}!`)
}).catch((error) => {
    console.log(error)
})
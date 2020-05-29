const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=c57e405230649f`)
        
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch data')
        }

}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
        if (response.status === 200) {
            let data = await response.json()
            const country = data.find((country) => country.alpha2Code === countryCode)
            return country
        } else {
            throw new Error('Unable to fetch data')
        }
        
}
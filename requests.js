const getLocation = () => {
    return fetch(`https://ipinfo.io/json?token=c57e405230649f`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data
    })
}

const getCountry = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country
    })
}
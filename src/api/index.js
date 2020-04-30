import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeUrl = url
  if (country) {
    changeUrl = `${url}/countries/${country}`
  } else if (country === 'global') {
    changeUrl = url
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeUrl)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.log('erro aqui bro', error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
    return modifiedData
  } catch (error) {
    console.log('erro aqui no fecthDailyData bro', error)
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
  } catch (error) {
    console.log('erro aqui no countries bro', error)
  }
}

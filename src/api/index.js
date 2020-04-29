import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.log('erro aqui bro', error)
  }
}

export const fecthDailyData = async () => {
  try {
    const { data } = axios.get(`${url}/daily`)
    console.log('data', data)
  } catch (error) {}
}

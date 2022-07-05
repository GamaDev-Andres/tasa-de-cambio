import axios from 'axios'
import endPoints from './endpoints.js'

export const getLatestRequest = async (symbol) => {
  try {
    const res = await axios.get(endPoints.getLatest(symbol))
    return res.data
  } catch (error) {
    console.log(error.response.data)
    return {
      ok: false,
      errors: [{ msg: error.response.data.message }],
    }
  }
}
export const getHistoricalRequest = async (date, symbol) => {
  try {
    const res = await axios.get(endPoints.getHistorical(date, symbol))
    return res.data
  } catch (error) {
    console.log(error.response.data)
    return {
      ok: false,
      errors: [{ msg: error.response.data.message }],
    }
  }
}

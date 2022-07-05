import axios from 'axios'
import endPoints from './endpoints.js'

export const getLatestRequest = async (symbol) => {
  try {
    const res = await axios.get(endPoints.getLatest(symbol))
    return res.data
  } catch (error) {
    console.log(error)
  }
}

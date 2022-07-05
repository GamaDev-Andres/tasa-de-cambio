import { getCurrenciesRequest } from '../services/requests.js'

const getCurrencies = async (req, res) => {
  try {
    const data = await getCurrenciesRequest()
    if (data.ok === false) {
      return res.status(400).json({
        ...data,
      })
    }

    res.json({
      ok: true,
      data,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      errors: [{ msg: 'error en el servidor' }],
    })
  }
}
export default getCurrencies

import { getHistoricalRequest } from '../services/requests.js'

const getHistorical = async (req, res) => {
  const { date, symbol } = req.query
  try {
    const data = await getHistoricalRequest(date, symbol)
    if (data.ok === false) {
      return res.status(400).json({
        ...data,
      })
    }
    if (!data.rates[symbol]) {
      return res.json({
        ok: false,
        errors: [{ msg: 'El symbol no existe' }],
      })
    }
    res.json({
      ok: true,
      data: {
        fecha: date,
        rates: data.rates,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      errors: [{ msg: 'error en el servidor' }],
    })
  }
}
export default getHistorical

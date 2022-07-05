import { getLatestRequest } from '../services/requests.js'

const getLatest = async (req, res) => {
  const { symbol } = req.params

  try {
    if (!symbol) {
      return res.status(400).json({
        ok: false,
        errors: [{ msg: 'No se envio el parametro symbol' }],
      })
    }
    const data = await getLatestRequest(symbol)
    if (!data.rates[symbol]) {
      return res.json({
        ok: false,
        errors: [{ msg: 'El symbol no existe' }],
      })
    }
    res.json({
      ok: true,
      data: {
        fecha: Intl.DateTimeFormat(data.timestamp).format(),
        rates: data.rates,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
export default getLatest

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
export default getLatest

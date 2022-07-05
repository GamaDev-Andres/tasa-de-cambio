const isValidateQueryHistorical = (req, res, next) => {
  const { date, symbol } = req.query
  if (!date) {
    return res.status(400).json({
      ok: false,
      errors: [{ msg: 'No se envio la fecha.' }],
    })
  }
  if (!symbol) {
    return res.status(400).json({
      ok: false,
      errors: [{ msg: 'No se envio el symbol.' }],
    })
  }

  next()
}

export default isValidateQueryHistorical

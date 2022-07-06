const Results = ({ result }) => {
  const { symbol, result: resultado } = result

  return (
    <div className="bg-slate-50 w-full max-w-screen-sm my-4 mx-auto p-4 sm:rounded-2xl">
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        Resultados
      </h2>
      <h3 className="text-center my-2 text-lg text-gray-800 w-full">
        USD/{symbol}
      </h3>
      <span className="block w-full text-center text-sm">
        1 USD = <strong>{resultado}</strong> {' ' + symbol}
      </span>
    </div>
  )
}

export default Results

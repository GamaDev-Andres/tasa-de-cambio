import { useEffect, useState } from "react";
import {
  getCurrenciesRequest,
  getHistoricalRequest,
  getLatestRequest,
} from "../services/requests";

const FilterBy = ({ setResult }) => {
  const [currencies, setCurrencies] = useState({});
  const [symbol, setSymbol] = useState("");
  const [fecha, setFecha] = useState(
    Intl.DateTimeFormat("fr-ca").format(Date.now())
  );
  const [latest, setLatest] = useState(true);
  useEffect(() => {
    async function getCurrencies() {
      try {
        const data = await getCurrenciesRequest();
        if (data.ok) {
          setCurrencies(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCurrencies();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = latest
        ? await getLatestRequest(symbol)
        : await getHistoricalRequest(fecha, symbol);
      if (data.ok) {
        setResult({
          symbol,
          result: data.data.rates[symbol],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-slate-50 px-4 py-2">
      <h2 className="text-center font-semibold text-gray-800 text-lg">
        Formulario
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center md:gap-4 md:flex-row "
        autoComplete="off"
      >
        <label className="flex flex-col w-full max-w-lg">
          <span className="text-xs text-gray-400">moneda base:</span>
          <input
            className="cursor-not-allowed px-2 py-1 rounded-md outline-none border border-gray-300 focus:border-gray-400 text-xs"
            type="text"
            maxLength={3}
            minLength={3}
            readOnly
            value="USD"
          />
        </label>
        <span className="text-2xl font-bold">/</span>
        <label className="flex flex-col w-full max-w-lg">
          <span className="text-xs text-gray-400">moneda de cambio:</span>
          <input
            className="px-2 py-1 rounded-md outline-none border border-gray-300 focus:border-gray-400 text-xs"
            list="currencies"
            type="text"
            maxLength={3}
            minLength={3}
            value={symbol}
            onChange={() => setSymbol(e.target.value)}
          />
          <datalist id="currencies">
            {Object.entries(currencies).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </datalist>
        </label>
        <label className="flex flex-col w-full max-w-lg">
          <span className="text-xs text-gray-400">
            fecha de cambio:
            {!latest && (
              <button
                onClick={() => setLatest(true)}
                className="text-sm text-blue-400 ml-2"
              >
                actual
              </button>
            )}
          </span>
          {latest && (
            <select
              className="px-2 py-1 rounded-md outline-none border border-gray-300 focus:border-gray-400 text-xs"
              onChange={() => setLatest(e.target.value !== "otra")}
            >
              <option value="actual">Actual</option>
              <option value="otra">otra</option>
            </select>
          )}
          {!latest && (
            <input
              className="px-2 py-1 rounded-md outline-none border border-gray-300 focus:border-gray-400 text-xs"
              list="currencies"
              type="date"
              value={fecha}
              max={Intl.DateTimeFormat("fr-ca").format(Date.now())}
              onChange={() => setFecha(e.target.value)}
            />
          )}
        </label>
        <button className="w-full max-w-lg mt-2 md:mt-0 text-sm text-gray-700 hover:bg-blue-200 hover:border-blue-300 transition-color duration-300 px-2 py-1 border border-gray-300 rounded-xl">
          buscar
        </button>
      </form>
    </div>
  );
};

export default FilterBy;

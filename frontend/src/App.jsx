import { useState } from "react";
import FilterBy from "./components/FilterBy";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <FilterBy setResult={setResult} />
      {result && <Results result={result} />}
    </div>
  );
}

export default App;


import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [company, setCompany] = useState("Generali");
  const [branch, setBranch] = useState("Hogar");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("Pensando...");
    setTimeout(() => {
      setAnswer("💡 Esta es una respuesta simulada. Pronto se conectará con IA real.");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">🔍 CondicionIA</h1>

        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <div className="space-y-2">
            <label className="block font-medium">Compañía</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            >
              <option>Generali</option>
              <option>Mapfre</option>
              <option>AXA</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Ramo</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option>Hogar</option>
              <option>Auto</option>
              <option>Comercio</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Consulta</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="3"
              placeholder="¿Cubre la rotura del horno?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            disabled={loading}
          >
            {loading ? "Consultando..." : "Consultar IA"}
          </button>
        </div>

        {answer && (
          <div className="bg-white mt-6 p-4 rounded-xl shadow text-gray-800 whitespace-pre-wrap">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}

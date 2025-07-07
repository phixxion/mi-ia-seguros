import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>CondicionIA</title>
        <meta name="description" content="Consulta tu póliza con IA" />
      </Head>

      <main className="max-w-2xl mx-auto p-4">
        <div className="flex items-center space-x-3 mb-6">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold">CondicionIA</h1>
        </div>

        <label className="block mb-2 font-medium">Compañía</label>
        <select className="w-full p-2 border rounded mb-4">
          <option>Generali</option>
        </select>

        <label className="block mb-2 font-medium">Ramo</label>
        <select className="w-full p-2 border rounded mb-4">
          <option>Hogar</option>
        </select>

        <label className="block mb-2 font-medium">Consulta</label>
        <textarea
          placeholder="¿Qué deseas consultar?"
          className="w-full p-2 border rounded mb-4"
          rows="4"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Consultar IA
        </button>
      </main>
    </div>
  )
}

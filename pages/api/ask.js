export default async function handler(req, res) {
  const { query } = req.body;
  res.status(200).json({ result: "🔍 Esta será una respuesta conectada a IA real según el condicionado. (Simulada por ahora)" });
}
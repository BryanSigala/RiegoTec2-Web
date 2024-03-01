export default function handler(req, res) {
    const { id } = req.query
    res.send(`Riego realizado: ${id}`)
  }
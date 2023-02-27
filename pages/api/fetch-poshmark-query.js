const { fetchPoshmarkQuery } = require('../../function');

export default async function handler(req, res) {
    const { query, department } = req.query;
    const data = await fetchPoshmarkQuery(query, department);
    res.status(200).json(data);
}

import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST']
    })
)

export default async function handler(req, res){
    const { id } = req.query
    await cors(req,res)
    const result = await conn.query('SELECT NOW()')
    res.send(`Estado: ${id} ` + result[0][0]['NOW()'])
}
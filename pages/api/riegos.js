import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST']
    })
)

export default async function handler(req, res){
    await cors(req,res)
    const result = await conn.query('SELECT NOW()')
    res.send('Riegos realizados ' + result[0][0]['NOW()'])
}
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
    if(req.method==='GET'){
      const riego = await conn.query(`SELECT * FROM registroriego WHERE idRegistroRiego=${id}`)
      res.json(riego[0][0])
    }else{
      res.json({error: 'metodo no soportado'})
    }
    
}
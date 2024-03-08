import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'PATCH']
    })
)

export default async function handler(req, res){
    const { id } = req.query
    await cors(req,res)
    if(req.method==='GET'){
      const result = await conn.query('SELECT NOW()')
      res.json({hora: result[0][0]['NOW()'], iden: id})
    }else if(req.method==='PATCH'){
      res.json({metodo: 'patch'})
    }else{
      res.json({error: 'metodo no soportado'})
    }
    
}
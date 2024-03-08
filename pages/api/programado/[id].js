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
    if(req.method=='GET'){
      const programado = await conn.query(`SELECT * FROM programacionriego WHERE idProgramacionRiego=${id}`)
      res.json(programado[0][0])
    }else if(req.method==='PATCH'){
      res.json({metodo: 'PATCH'})
    }else if(req.method==='DELETE'){
      const del = await conn.query(`DELETE FROM programacionriego WHERE idProgramacionRiego=${id}`)
      res.json({metodo: 'DELETE', iden: id})
    }else{
      res.json({error: 'metodo no soportado'})
    }
    
}
import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST']
    })
)

export default async function handler(req, res){
    const { id } = req.query
    await cors(req,res)
    const session = await getServerSession(req, res, authOptions)
    if(!session){
        res.status(401).json({error: 'No autorizado, inicie sesion primero'})
        return
    }else{
      if(req.method=='GET'){
        const programado = await conn.query(`SELECT * FROM programacionriego WHERE idProgramacionRiego=${id}`)
        res.json(programado[0][0])
      }else if(req.method==='PATCH'){
        res.json({metodo: 'PATCH'})
      }else if(req.method==='DELETE'){
        const del = await conn.query(`DELETE FROM programacionriego WHERE idProgramacionRiego=${id}`)
        res.json({metodo: 'DELETE', iden: id})
      }else{
        res.status(405).json({error: 'Metodo no permitido'})
      }
    }
}
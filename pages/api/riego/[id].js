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
      if(req.method==='GET'){
        const riego = await conn.query(`SELECT * FROM registroriego WHERE idRegistroRiego=${id}`)
        res.json(riego[0][0])
      }else{
        res.status(405).json({error: 'Metodo no permitido'})
      }
    }
    
}
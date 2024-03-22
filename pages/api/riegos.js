import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST']
    })
)

export default async function handler(req, res){
    await cors(req,res)
    const session = await getServerSession(req, res, authOptions)
    if(!session){
        res.status(401).json({error: 'No autorizado, inicie sesion primero'})
        return
    }else{
        if(req.method==='POST'){
            const riegoNuevo = await conn.query(`INSERT INTO registroriego (fecha, horaInicio, horaFin, duracion, idUsuario, idSensores)
            VALUES ('${req.body.fecha}', '${req.body.horaInicio}', '${req.body.horaFin}', ${req.body.duracion}, ${req.body.usuario}, ${req.body.sensores})`)
            res.json({riegoNuevo})
        }else if(req.method==='GET'){
            const riegos = await conn.query('SELECT * FROM registroriego')
            res.json(riegos[0])
        }else{
            res.status(405).json({error: 'Metodo no permitido'})
        }
    }
    
}
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
    if(req.method==='GET'){
        const programados = await conn.query('SELECT * FROM programacionriego')
        res.json(programados[0])
    }else if (req.method==='POST'){
        const prograNuevo = await conn.query(`INSERT INTO programacionriego (periodo, frecuencia, horaInicio, horaFin, duracion, idUsuario)
        VALUES ('${req.body.periodo}', ${req.body.frecuencia}, '${req.body.horaInicio}', '${req.body.horaFin}', ${req.body.duracion}, ${req.body.usuario})`)
        res.json(prograNuevo)
    }else{
        res.status(405).json({error: 'Metodo no permitido'})
    }
    
}
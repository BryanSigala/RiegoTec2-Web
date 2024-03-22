import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'PATCH']
    })
)

export default async function handler(req, res){
    await cors(req,res)
        if(req.method==='POST'){
            const sensores = await conn.query(`INSERT INTO sensores (humedadAire, temperatura, humedadSuelo, caudal, ciclosRiego)
            VALUES (${req.body.humedadAire}, ${req.body.temperatura}, ${req.body.humedadSuelo}, ${req.body.caudal}, ${req.body.ciclosRiego})`)
            res.json({sensores})
        }else if(req.method==='GET'){
            const sensores = await conn.query('SELECT * FROM sensores where idSensores=1')
            res.json(sensores[0][0])
        }else if(req.method==='PATCH'){
            const sensor = await conn.query(`UPDATE sensores SET humedadAire = ${req.body.humedadAire}, temperatura = ${req.body.temperatura},
            humedadSuelo = ${req.body.humedadSuelo}, caudal = ${req.body.caudal}, ciclosRiego = ${req.body.ciclosRiego} WHERE idSensores = 1`)
            res.json(sensor)
        }
        else{
            res.status(405).json({error: 'Metodo no permitido'})
        }
}
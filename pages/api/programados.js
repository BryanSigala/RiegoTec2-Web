import {conn} from '@/libs/mysql'

export default async function handler(req, res){
    const result = await conn.query('SELECT NOW()')
    res.send('Riegos programados ' + result[0][0]['NOW()'])
}
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {conn} from '@/libs/mysql'
import Cors from 'cors'
import initMiddleware from '@/libs/init-middleware';

const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS']
    })
)

export default NextAuth({
  providers: [
    Credentials({
      name:  'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" } 
      },
      async authorize(credentials, req) {
        const db = conn;
        const user = await db.query(`SELECT * FROM usuarios WHERE nombre='${credentials.username}' AND password='${credentials.password}'`);
        if (user[0].length > 0) {
          return { id: user[0][0].idUsuario, name: user[0][0].username }
        } else {
          return null
        }
      },
    }),
  ],
})

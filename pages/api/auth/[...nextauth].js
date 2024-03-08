import NextAuth from "next-auth"
import Providers from "next-auth/providers"
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
    Providers.Credentials({
      name:  'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" } 
      },
      async authorize(credentials, req) {
        const db = conn();
      },
    }),
  ],
})

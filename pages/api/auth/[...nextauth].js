import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {conn} from '@/libs/mysql'

export const authOptions = {
  providers: [
    Providers.Credentials({
      // Las credenciales pueden ser el nombre de usuario y la contraseña
      async authorize(credentials) {
        
      },
    }),
  ],
}

export default NextAuth(authOptions)
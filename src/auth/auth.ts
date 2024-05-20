import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Google from "next-auth/providers/google" 
import { env } from "process"
const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ 
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     })
  ],
})

// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
 
// export const { signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         username: { label: "Username" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize({ request }) {
//         const response = await fetch(request)
//         if (!response.ok) return null
//         return (await response.json()) ?? null
//       },
//     }),
//   ],
// })
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

let userAccount = null;
const bcrypt = require('bcrypt');

const configuration = {
    cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        // Providers.Apple({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: {
        //         teamId: process.env.APPLE_TEAM_ID,
        //         privateKey: process.env.APPLE_PRIVATE_KEY,
        //         keyId: process.env.APPLE_KEY_ID,
        //     }
        // }),
        Providers.Naver({
            clientId: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        Providers.Credentials({
            id: 'credentials',
            // name: "Login",
            async authorize(credentials) {
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });                

                if (user !== null)
                {
                    const checkPass = await bcrypt.compare(credentials.password, user.password)
                    if(checkPass){
                        userAccount = user;
                        console.log(user)
                        return user;
                    }else{
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
        })
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async signIn(user, account, profile) {
            const isAllowedSignIn = true
            if (isAllowedSignIn) {
                return true
            }
            if (typeof user.userId !== typeof undefined)
            {
                if (user.isActive === '1')
                {
                    return user;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }

        },
        async session(session, token) {
            if (userAccount !== null)
            {
                session.user = userAccount;
            }
            else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined 
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
            {
                session.user = token.user;
            }
            else if (typeof token !== typeof undefined)
            {
                session.token = token;
            }
            return session;
        },
        async jwt(token, user, account, profile, isNewUser) {
            if (typeof user !== typeof undefined)
            {
                token.user = user;               
            }
                return token;
        }
    }
}
export default (req, res) => NextAuth(req, res, configuration)
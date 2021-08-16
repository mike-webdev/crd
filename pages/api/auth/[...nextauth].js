import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
// import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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


            // if (typeof user !== typeof undefined)
            // {   
            //     console.log(account)
            //     if(account.provider == "facebook"){
            //         const findFB = await prisma.student_tbl.findFirst({
            //             where: {
            //                 fb_token: account.access_token
            //             }
            //         });  
            //         if(findFB == null){
            //             var name = user.name;
            //             var res = name.split(" ");
            //             console.log(user)
            //             const newUser = await prisma.student_tbl.create({
            //                 data: {
            //                   user_tbl:{
            //                     create:{}
            //                   },
            //                   first_name: res[0], 
            //                   last_name: res[1], 
            //                   email: user.email, 
            //                   password: "1231231",
            //                   fb_token: account.access_token,
            //                   profile_image: user.image
            //                 },
            //                 include: {
            //                   user_tbl: true,
            //                 },
            //             })
                       

            //             return '/update-user-info'
            //         }
            //     }else{
            //         if (user.isActive === '1')
            //         {
            //             return user;
            //         }
            //         else
            //         {
            //             return false;
            //         }
            //     }
                
            // }
            // else
            // {
            //     return false;
            // }

            // console.log(account)
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

                // if(account.provider == "facebook"){
                //     const findFB = await prisma.student_tbl.findFirst({
                //         where: {
                //             fb_token: account.access_token
                //         }
                //     });  
                //     if(findFB == null){
                //         const newUser = await prisma.student_tbl.create({
                //             data: {
                //               user_tbl:{
                //                 create:{}
                //               },
                //               first_name: user.name, 
                //               last_name: user.name, 
                //               email: user.email, 
                //               password: "1231231",
                //               fb_token: account.access_token
                //             },
                //             include: {
                //               user_tbl: true,
                //             },
                //         })

                //         return '/register'
                //     }
                // }
                
            }
                return token;
        }
    }
}
export default (req, res) => NextAuth(req, res, configuration)
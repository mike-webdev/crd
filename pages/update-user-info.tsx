//TESTING SERVER PROPS

import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getProviders, useSession, getSession, signIn } from "next-auth/client";
import AccessDenied from "../components/sections/AccessDenied";
import Image from "next/image";
import prisma from "../lib/prisma";
import superjson from 'superjson';
import { PrismaClient } from '@prisma/client';


export async function getServerSideProps(ctx){
   const session = await getSession(ctx);
    const userinfo = await prisma.user.findUnique({
        where: {
            id: session.user["id"],
        },
        select:{
            name: true,
            email: true,
            image: true,
            gender: true,
            birthday: true,
        }
        });

    return{
        props: {
            userInformation : userinfo
        }
    }
  
}

export default function updateInfo({userInformation}) {
    const [session, loading] = useSession();
    if(session){
        console.log(userInformation)

    }
  return(
      <h1>hey</h1>
  )
}

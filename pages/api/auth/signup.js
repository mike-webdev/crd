
// import { hashPassword } from "../../../lib/auth";
// import prisma from "../../../lib/prisma";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const saltRounds = 10;


async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  console.log("req.body", req.body);
  const data = req.body;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const name = firstname + " " + lastname
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmpassword;

  if (
    !email ||
    !email.includes("@")
  ) {
    res.status(422).json({ message: "Please use a valid email address" });
    return;
  }


  if(!password || password.trim().length < 7){
    res.status(422).json({ message: "Password should be 7 characters long." });
    return;
  }

  if(password !== confirmPassword){
    res.status(422).json({ message: "Passwords do not match" });
    return;
  }

  //   const client = await connectToDatabase();
  //   const db = client.db();

  //   const existingUser = await db.collection("users").findOne({ email: email });
  //   if (existingUser) {
  //     res.status(422).json({ message: "User exists already!" });
  //     client.close();
  //     return;
  //   }

  //   const hashedPassword = await hashPassword(password);

  //   const result = await db.collection("users").insertOne({
  //     email: email,
  //     password: hashedPassword,
  //   });

  //   res.status(201).json({ message: "Created user!" });
  //   client.close();

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if(user !== null){
    res.status(422).json({ message: "User exists already!" , status : "Error"});
  }else{
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPass = bcrypt.hashSync(password, salt);
    
    const newUser = await prisma.user.create({
      data: {
        // user_tbl:{
        //   create:{}
        // },
        name: name,
        email: email, 
        password: hashedPass,
      },
      // include: {
      //   user_tbl: true,
      // },
    })

    console.log(newUser)

    if(newUser){
      res.status(201).json({ message: "Created user!", status: "Success" });
    }
  }


}

export default handler;

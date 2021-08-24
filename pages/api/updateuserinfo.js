import prisma from "../../lib/prisma";
import moment from 'moment'
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  console.log("update user: "+ req.body)
  const id = req.body.studentId;
  const name = req.body.name;
  const email = req.body.email;
  const image = req.body.image;
  const gender = req.body.gender;
  const birthday = req.body.birthday;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  if(!password || password.trim().length < 7){
    res.status(422).json({ message: "Password should be 7 characters long." });
    return;
  }

  if(password !== confirmpassword){
    res.status(422).json({ message: "Passwords do not match" });
    return;
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPass = bcrypt.hashSync(password, salt);

  const user = await prisma.user.findMany({
    where: {
      email: email,
    },
  });
  const bday = moment(birthday).toISOString();

  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      image: image,
      gender: gender,
      birthday: bday,
      password: hashedPass,
    },
  })
  

  if(updateUser){
    res.status(201).json({ message: "Details Saved!", status: "Success" });
  }else{
    res.status(201).json({ message: "NOT SAVED!", status: "Failed" });
  }
}

export default handler;

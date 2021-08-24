import prisma from "../../lib/prisma";

async function handler(req, res) {
  const { id } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: id*1,
    },
  });

  res.status(200).send(user);
}

export default handler;

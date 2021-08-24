import prisma from "../../lib/prisma";


async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  console.log("req.body", req.body);
  const data = req.body;
  const title = req.body.specializationTitle;
  const summary = req.body.courseSummary;
  const student_level = req.body.minLevel + "-" + req.body.maxLevel
  const student_skill = req.body.studentSkills;
  const logo = req.body.courseLogo;
  const preview = req.body.coursePreview;

  const user = await prisma.specialization_details_tbl.findFirst({
    where: {
      title: title,
    },
  });

  if(user !== null){
    res.status(422).json({ message: "Course Title already exists!" , status : "Error"});
  }else{
    const addSpecialization = await prisma.specialization_details_tbl.create({
      data: {
        course_tbl:{
            create:{
                course_type: "specialization"
            }
        },
        title: title,
        summary: summary, 
        student_level: student_level,
        student_skill: student_skill,
        logo: logo,
        preview:preview,
        is_archived: false
      },
      include: {
        course_tbl: true,
      }

    })

    console.log(addSpecialization)

    if(addSpecialization){
      res.status(201).json({ message: "Details Saved!", status: "Success" });
    }
  }


}

export default handler;

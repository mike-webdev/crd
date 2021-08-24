import Image from "next/image";
import Link from "next/link";
import Specialization1 from "../../public/images/Admin/merged.png";
import FreeStanding from "../../public/images/Admin/freestanding.png";

export default function WelcomeCourseCreator() {
  return (
    <>
      <div className="container">
          <div className="row mt-4 mb-2">
              <h1 className="col-sm-6">Course Creator</h1>
              <div className="col-sm-6 text-end">
                  <Link href="/admin/course-management" >
                      <a className="admin-btn">Course Management</a>
                  </Link>
              </div>
          </div>

        <div className="row">
          <div className="col-md-6">
            <div className="cards">
              <div className="cards-image">
                <Image
                  src={Specialization1}
                  layout="responsive"
                  sizes="100vw"
                  placeholder="blur"
                  width={100}
                  height={100}
                  alt="Specialization"
                />
              </div>
              <div className="cards-label"><Link href="specialization-creator"><a>Create Specialization</a></Link></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cards">
              <div className="cards-image">
                <Image
                  src={FreeStanding}
                  layout="responsive"
                  sizes="100vw"
                  placeholder="blur"
                  width={100}
                  height={100}
                  alt="Free Standing"
                />
              </div>
              <div className="cards-label">Create Free-Standing</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card-background">
              <div className="card-foreground">
                <div className="welcome-card">
                  <h5>WELCOME TO COURSE CREATOR LABS!</h5> 
                </div>
                <br />
                <div className="body-card">
                  <p>
                    There are two ways to create a course.
                    <br />
                    <br />
                    <b>1. Create Specialization</b>
                    <br />
                    Do you have a set of courses that will help a student become an expert on a particular subject? Select this option as it allows you to put all these courses into one.
                    <br />
                    <br />
                    <b>2. Create Free-standing</b>
                    <br />
                    Is your course a stand-alone? Does your course not need many courses in one? If your answer is yes, then, choose this course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cards {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
        }

        .cards-image {
          background: #808080;
          padding: 20px 10px;
          border-radius: 30px;
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }

        .cards-label {
          background: #87ceeb;
          font-size: 22px;
          text-align: center;
          padding: 20px 10px;
          border-radius: 20px;
          transform: translateY(-15px);
          width: 60%;
          margin-left: auto;
          margin-right: auto;
        }

        .card-background {
          background-image: linear-gradient(109deg, skyblue 60%, white 60.5%);
          border-radius: 50px;
          width: 100%;
          text-align: right;
        }

        .card-foreground {
          border: 1px solid black;
          border-radius: 50px;
          background: #ffffff;
          padding: 10px 10px;
          margin-left: auto;
          width: 95%;
        }

        .welcome-card {
          background: #000000;
          color: #ffffff;
          transform: translateX(-10px);
          padding: 5px;
          width: 70%;
          text-align: center;
        }

        p {
          font-size: 20px;
          text-align: left;
          padding-left: 10px;
        }
      `}</style>
    </>
  );
}

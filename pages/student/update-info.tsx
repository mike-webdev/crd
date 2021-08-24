import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getProviders, useSession, getSession, signIn } from "next-auth/client";
import AccessDenied from "../../components/sections/AccessDenied";
import Image from "next/image";
import prisma from "../../lib/prisma";

export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
   const userinfo = await prisma.user.findUnique({
       where: {
          id: session.user["id"],
       },
       select:{
           id: true,
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
console.log(userInformation)
  const [studentId, setstudentId] = useState(userInformation.id);
  const [name, setName] = useState(userInformation.name);
  const [email, setEmail] = useState(userInformation.email);
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState(userInformation.gender);
  const [birthday, setBirthday] = useState(userInformation.birthday);

  const [fetching, setFetching] = useState(false);
  const [session, loading] = useSession();
  const router = useRouter();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied/>;
  }


  // const getUser = async () => {
  //   if(session){
  //     const id = session.user["id"];
  //     const response = await fetch("/api/getUserInfo", {
  //       method: "POST",
  //       body: JSON.stringify({ id }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const data = await response.json();
  //     // console.log(data);
  //     setstudentId(data.id)
  //     setName(data.name)
  //     setEmail(data.email);
  //     setImage(data.image)
  //     setImage(data.gender)
  //     setImage(data.birthday)
  //   }
    
  // };

  // getUser();

  // const imageLoader=({ src, width, quality })=>{
  //   return `${image}/${src}?w=${width}&q=${quality || 75}`
  // }
  const imageLoader=({src})=>{
    return image
  }
  // console.log(imageLoader)


  async function submitHandler(e) {
    e.preventDefault();
    console.log("submit")
    
        const response = await fetch("/api/updateUserInfo", {
        method: "POST",
        body: JSON.stringify({
            studentId,
            name,
            email,
            image,
            gender,
            birthday,
            password,
            confirmpassword
        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        console.log(response.status)


        const data = await response.json();
        if (!response.ok) {
        console.log(data);
        }
        console.log("data", data);

        if (data.message !== null) {
        // setError(data.message)
        if (data.status == "Success") {
            toast.success(data.message);
            router.push("/student");
        } else {
            toast.error(data.message);
        }
        }
  }

  function ViewPass(type) {
    switch (type) {
      case "viewpass":
        const password = document.getElementById(
          "password"
        ) as HTMLInputElement;
        password.type = "text";

        (document.getElementById("viewpass") as HTMLElement).classList.add(
          "d-none"
        );
        (document.getElementById("closepass") as HTMLElement).classList.remove(
          "d-none"
        );
        break;
      case "viewpassConfirm":
        const passwordconfirm = document.getElementById(
          "confirmpassword"
        ) as HTMLInputElement;
        passwordconfirm.type = "text";

        (
          document.getElementById("viewpassconfirm") as HTMLElement
        ).classList.add("d-none");
        (
          document.getElementById("closepassconfirm") as HTMLElement
        ).classList.remove("d-none");
        break;
    }
  }

  function ClosePass(type) {
    switch (type) {
      case "closepass":
        const password = document.getElementById(
          "password"
        ) as HTMLInputElement;
        password.type = "password";

        (document.getElementById("viewpass") as HTMLElement).classList.remove(
          "d-none"
        );
        (document.getElementById("closepass") as HTMLElement).classList.add(
          "d-none"
        );
        break;
      case "closepassConfirm":
        const passwordconfirm = document.getElementById(
          "confirmpassword"
        ) as HTMLInputElement;
        passwordconfirm.type = "password";

        (
          document.getElementById("viewpassconfirm") as HTMLElement
        ).classList.remove("d-none");
        (
          document.getElementById("closepassconfirm") as HTMLElement
        ).classList.add("d-none");
        break;
    }
  }

  return (
    <div className="container mb-4 update-user-info">
      {/* {session.user} */}
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="box p-4 mt-4">
            <h3>Update your Information</h3>
            <form className="mb-4" onSubmit={submitHandler}>
              <input type="hidden" name="id" defaultValue={studentId} />

              <div className="profile-image">
                {/* {image && (
                    <Image loader={imageLoader} src={image} width={300} height={300}/>
                  )
                } */}

                <input type="file" name="profileImage" id="profileImage" />
              </div>

            
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="name">
                    <i className="fas fa-user-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="emailicon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                  aria-label="emailaddress"
                  aria-describedby="emailicon"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="gendericon">
                    <i className="fas fa-user-friends"></i>
                  </span>
                </div>
                <select name="gender" id="gender"
                  className="form-control"
                  placeholder="gender"
                  aria-label="gender"
                  aria-describedby="gendericon"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
               
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="birthdayicon">
                    <i className="fas fa-birthday-cake"></i>
                  </span>
                </div>
                <input
                  type="date"
                  className="form-control"
                  placeholder="birthday"
                  aria-label="birthday"
                  aria-describedby="birthdayicon"
                  name="birthday"
                  id="birthday"
                  // value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>


              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="passwordicon">
                    <i className="fas fa-unlock-alt"></i>
                  </span>
                </div>

                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="passwordicon"
                  name="password"
                  id="password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className="far fa-eye eyes"
                  id="viewpass"
                  onClick={() => ViewPass("viewpass")}
                ></i>
                <i
                  className="far fa-eye-slash eyes d-none"
                  id="closepass"
                  onClick={() => ClosePass("closepass")}
                ></i>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="passwordicon">
                    <i className="fas fa-unlock-alt"></i>
                  </span>
                </div>

                <input
                  type="password"
                  className="form-control"
                  placeholder="confirm password"
                  aria-label="confirmpassword"
                  aria-describedby="passwordicon"
                  id="confirmpassword"
                  // value={confirmpassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                <i
                  className="far fa-eye eyes"
                  id="viewpassconfirm"
                  onClick={() => ViewPass("viewpassConfirm")}
                ></i>
                <i
                  className="far fa-eye-slash eyes d-none"
                  id="closepassconfirm"
                  onClick={() => ClosePass("closepassConfirm")}
                ></i>
              </div>

              <div className="d-grid mt-4">
                {fetching ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    &emsp;Updating your information
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <style jsx>
        {`
          .eyes {
            position: absolute;
            right: 7px;
            top: 10px;
            color: grey;
            z-index: 99;
          }
        `}
      </style>
    </div>
  );
}


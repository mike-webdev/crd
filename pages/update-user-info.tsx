import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProviders, useSession, getSession, signIn } from "next-auth/client";

export default function updateInfo() {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();

    setLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      setLoading(false);
    }

    const data = await response.json();
    if (!response.ok) {
      console.log(data);
    }
    console.log("data", data);

    if (data.message !== null) {
      // setError(data.message)
      if (data.status == "Success") {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    }
    if (response.ok) {
      router.replace("/login");
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
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="box p-4 mt-4">
            <h1>Update your Information</h1>
            <form className="mb-4" onSubmit={submitHandler}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="name">
                    <i className="fas fa-user-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
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
                  placeholder="Last Name"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="password"
                  value={password}
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
                  value={confirmpassword}
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
                {loading ? (
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

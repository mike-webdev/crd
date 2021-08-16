import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProviders, useSession, getSession, signIn } from "next-auth/client";

export default function Register() {
  // const { state } = useContext(Context);
  // const { user } = state;

  // const router = useRouter();

  // useEffect(() => {
  //   if (user !== null) router.push("/");
  // }, [user]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // console.table({ name, email, password });
  //   try {
  //     const { data } = await axios.post(`/api/register`, {
  //       name,
  //       email,
  //       password,
  //       confirmpassword,
  //     });
  //     toast.success("Registration successful. Please login.");
  //   } catch (err) {
  //     toast.error(err.response.data);
  //   }
  // };
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  // const [session, loading] = useSession();

  // const [isLogin, setIsLogin] = useState(true);

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
            <h1>Register</h1>
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

              <small>
                Already have an account?&nbsp;
                <Link href="/login">
                  <b>Login</b>
                </Link>
              </small>
              <div className="d-grid mt-4">
                {loading ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                      &emsp;Registering User...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                )}
              </div>
            </form>
            <small>Register with:</small>
            <div className="row">
              <div className="col-sm-6">
                {/* <button type="submit" className="btn fb mb-2 w-100 text-light">
                  <i className="fab fa-facebook"></i>&emsp;Facebook
                </button> */}
                <button
                  className="btn fb mb-2 w-100 text-light"
                  onClick={() =>
                    signIn("facebook", {
                      callbackUrl: "http://localhost:3000/student",
                    })
                  }
                ></button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-dark mb-2 w-100 text-light"
                >
                  <i className="fab fa-apple"></i>&emsp;Apple
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn google mb-2 w-100 text-light"
                >
                  <i className="fab fa-google"></i>&emsp;Google
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-success w-100 text-light"
                >
                  <i className="fas fa-university"></i>&emsp;Naver
                </button>
              </div>
            </div>
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

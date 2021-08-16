import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";

import { getProviders, useSession, getSession, signIn } from 'next-auth/client';

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loginError, setLoginError] = useState('');
  const [loading,setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setLoading(true);
    signIn("credentials", {
      email, password, callbackUrl: `${window.location.origin}/student`, redirect: false
    }
    ).then(function (result) {
      setLoading(false)
      if (result.error !== null) {
        if (result.status === 401) {
          // setLoginError("Your email/password combination was incorrect. Please try again");
          toast.error("Your email/password is incorrect.");
        }
        else {
          // setLoginError(result.error);
          toast.error(result.error)
        }
      }
      else {
        toast.success("Logged in successfuly.")
        router.push(result.url);
      }
    });

  }
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // //state
  // const { state, dispatch } = useContext(Context);

  // const { user } = state;

  // //router
  // const router = useRouter();

  // useEffect(() => {
  //   if (user !== null) router.push("/");
  // }, [user]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await axios.post(`/api/login`, {
  //       email,
  //       password,
  //     });
  //     //   console.log("LOGIN RESPONSE", data)
  //     dispatch({
  //       type: "LOGIN",
  //       payload: data,
  //     });

  //     //save in local storage
  //     window.localStorage.setItem("user", JSON.stringify(data));

  //     //redirect
  //     router.push("/");

  //     toast.success("Logged In");
  //   } catch (err) {
  //     toast.error(err.response.data);
  //   }
  // };

  function ViewPass() {
    const password = (document.getElementById('password') as HTMLInputElement);
    password.type = "text";

    (document.getElementById('viewpass') as HTMLElement).classList.add('d-none');
    (document.getElementById('closepass') as HTMLElement).classList.remove('d-none');
  }

  function ClosePass() {
    const password = (document.getElementById('password') as HTMLInputElement);
    password.type = "password";

    (document.getElementById('viewpass') as HTMLElement).classList.remove('d-none');
    (document.getElementById('closepass') as HTMLElement).classList.add('d-none');
  }

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="box p-4 mt-4">
            <h1>Login</h1>
            <form className="mb-4 mt-4" onSubmit={handleLogin}>
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
                  id="email"
                  aria-label="emailaddress"
                  aria-describedby="emailicon"
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
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="far fa-eye eyes" id="viewpass" onClick={ViewPass}></i>
                <i className="far fa-eye-slash eyes d-none" id="closepass" onClick={ClosePass}></i>
              </div>
              <small>
                <a href="#">Forgot password?</a>
              </small>

              <div className="d-grid mt-4">
               
                {loading ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                      &emsp;Logging in to your account...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                  Login
                </button>
                )}

              </div>
            </form>
            <small>Login with:</small>
            <div className="row">
              <div className="col-sm-6">
                {/* <button type="submit" className="btn fb mb-2 w-100 text-light">
                  <i className="fab fa-facebook"></i>&emsp;Facebook
                </button> */}
                <button
                  className="btn fb mb-2 w-100 text-light"
                  onClick={() =>
                    signIn("facebook", { callbackUrl: "http://localhost:3000/student" })
                  }
                >
                  <i className="fab fa-facebook"></i>&emsp;Facebook
                </button>
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
                {/* <button
                  type="submit"
                  className="btn google mb-2 w-100 text-light"
                >
                  <i className="fab fa-google"></i>&emsp;Google
                </button> */}
                <button
                  className="btn google mb-2 w-100 text-light"
                  onClick={() =>
                    signIn("google", { callbackUrl: "http://localhost:3000/student" })
                  }
                >
                  <i className="fab fa-google"></i>&emsp;Google
                </button>
              </div>
              <div className="col-sm-6">
                {/* <button
                  type="submit"
                  className="btn btn-success w-100 text-light"
                >
                  <i className="fas fa-university"></i>&emsp;Naver
                </button> */}
                <button
                  className="btn btn-success w-100 text-light"
                  onClick={() =>
                    signIn("naver", { callbackUrl: "http://localhost:3000/dashboard" })
                  }
                >
                  <i className="fas fa-university"></i>&emsp;Naver
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-lg"></div>
      </div>
      <style jsx>
        {`
                .eyes{
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

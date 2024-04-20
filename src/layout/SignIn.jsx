import React, { useContext } from "react";
import Nav from "../shared/nav/Nav";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignIn = () => {
const {signInUsers, signInGoogle} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
console.log(location)

  const handleSignIn = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUsers(email, password)
    .then(res => {
      const user = res.user
      
      location.state ? navigate(location.state) : navigate("/category")
      e.target.email.value = "";
     e.target.password.value = "";
    })
    .catch(err =>{
      console.log(err.message)
      e.target.email.value = "";
      e.target.password.value = "";
    })
    
  }
  const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(res => {
      const user = res.user
      location.state ? navigate(location.state) : navigate("/category")
    })
    .catch(err =>{
      console.log(err.message)
    })
  }
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
            <h1 className='text-3xl font-bold text-center'>Sign In</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            <p>Don't have an account? <Link to={"/signUp"} className="text-blue-500 underline">Sign Up</Link></p>
            <button onClick={handleGoogleSignIn} className='btn flex items-center gap-2'><FcGoogle /> Google</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

import React from "react";

const Root = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const user = { name, email };

    console.log(user)

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert("success")
    })
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-96">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <h1 className="text-3xl font-bold text-center">Add user</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;

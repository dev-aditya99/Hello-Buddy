import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const { loginUser, loading } = useLogin();

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();

    await loginUser({
      username: e.target.username.value,
      password: e.target.password.value,
    });
  };
  return (
    <div className="w-80 py-4 px-2 bg-gray-800/25 border border-gray-500/50 shadow-lg backdrop-blur-md rounded-lg flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold mb-9">
        Login <span className="text-base main-theme-color">Hello Buddy</span>
      </h2>

      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        {/* username  */}
        <div>
          <label className="input input-bordered flex items-center gap-2 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent"
              placeholder="Username"
              name="username"
            />
          </label>
        </div>

        {/* password  */}
        <div>
          <label className="input input-bordered flex items-center gap-2 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onPaste={true}
            />
          </label>
        </div>

        {/* sign up page link  */}
        <div>
          <Link to="/sign-up" className="text-sm text-gray-500 hover:underline">
            Create new account
          </Link>
        </div>

        {/* login btn  */}
        <button className="btn btn-neutral bg-gray-800 hover:bg-transparent">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;

import React from "react";

const SignUp = () => {
  return (
    <div className="sm:w-[550px] w-fit py-8 px-6 bg-gray-800/25 border border-gray-500/50 shadow-lg backdrop-blur-md rounded-lg flex flex-col items-center justify-start">
      <h2 className="text-2xl font-bold mb-9">
        SignUp <span className="text-base main-theme-color">Hello Buddy</span>
      </h2>

      <form className="flex flex-col gap-3">
        {/* name  */}
        <div className="flex flex-wrap gap-2">
          {/* first name  */}
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
            <input
              type="text"
              className="grow bg-transparent"
              placeholder="First Name"
              name="first_name"
            />
          </label>

          {/* last name  */}
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
            <input
              type="text"
              className="grow bg-transparent"
              placeholder="Last Name"
              name="last_name"
            />
          </label>
        </div>

        {/* username  */}
        <div className="flex">
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
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

        {/* Email  */}
        <div className="flex">
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow bg-transparent"
              placeholder="Email"
              name="email"
            />
          </label>
        </div>

        {/* passwords  */}
        <div className="flex flex-wrap gap-2">
          {/* password  */}
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
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
            />
          </label>

          {/* confirm password  */}
          <label className="input input-bordered flex items-center gap-2 bg-transparent grow">
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
              placeholder="Confirm Password"
              name="confirm_password"
            />
          </label>
        </div>

        {/* gender  */}
        <div className="input input-bordered bg-transparent grow flex items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            {/* male  */}
            <label
              for="gender-male"
              className="flex items-center gap-2 bg-transparent grow"
            >
              <input
                type="radio"
                name="radio-1"
                id="gender-male"
                value={1}
                className="radio radio-warning"
                defaultChecked
              />
              Male
            </label>

            {/* female  */}
            <label
              for="gender-female"
              className="flex items-center gap-2 bg-transparent grow"
            >
              <input
                type="radio"
                name="radio-1"
                id="gender-female"
                value={0}
                className="radio radio-warning"
              />
              Female
            </label>
          </div>
        </div>

        {/* Login page link  */}
        <div>
          <a href="/" className="text-sm text-gray-500 hover:underline">
            Already have an account? Login
          </a>
        </div>

        {/* SignUp btn  */}
        <button className="btn btn-neutral bg-gray-800 hover:bg-transparent">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

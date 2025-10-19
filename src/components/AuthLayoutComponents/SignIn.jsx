// import React, { use } from "react";
import { use, useState } from "react";
import MyContainer from "../MyContainer";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../auth-context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signInUser, loader } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setLoading(false);
      return;
    }
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
        setLoading(loader);
        toast.success("Successfully Login!");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        toast.error(error);
      });
  };
  return (
    <MyContainer className={"flex justify-center py-16"}>
      <div className="bg-base-100 p-4 sm:p-8 md:p-16 rounded-sm">
        <h2 className="text-center text-2xl font-semibold">
          Login your account
        </h2>
        <hr className="my-10 text-base-300" />
        <div>
          <form
            onSubmit={hanldeSubmit}
            className="flex flex-col gap-6 w-2xs sm:w-sm md:w-xl"
          >
            <div className="flex flex-col gap-1.5">
              <label>Email address</label>
              <input
                className="bg-base-200 p-5"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Password</label>
              <input
                className="bg-base-200 p-5"
                type="password"
                name="password"
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-xl btn-primary text-[16px]"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xl"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="text-center mt-6 text-sm">
            Dont’t Have An Account ?{" "}
            <Link className="text-secondary" to="/auth/sign-up">
              Register
            </Link>
          </p>
          {error && (
            <p className="text-secondary w-xl my-2.5 text-center">{error}</p>
          )}
        </div>
      </div>
    </MyContainer>
  );
};

export default SignIn;

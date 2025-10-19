import React, { use, useState } from "react";
import MyContainer from "../MyContainer";
import { AuthContext } from "../../auth-context/AuthContext";
import { useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, loader } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value || "";
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (name.length < 3) {
      setError("Name must have at least 3 charecter");
      setLoading(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      setLoading(false);
      return;
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log(res.user);
            navigate("/");
            setLoading(loader);
            toast.success("Account Created Successfully!");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };
  return (
    <MyContainer className={"flex justify-center py-4"}>
      <div className="bg-base-100 p-4 sm:p-8 md:p-16 py-10 rounded-sm">
        <h2 className="text-center text-2xl font-semibold">
          Register your account
        </h2>
        <hr className="my-4 text-base-300" />
        <div>
          <form
            onSubmit={hanldeSubmit}
            className="flex flex-col gap-6 w-2xs sm:w-sm md:w-xl"
          >
            <div className="flex flex-col gap-1.5">
              <label>Your Name</label>
              <input
                className="bg-base-200 p-5"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>Photo URL</label>
              <input
                className="bg-base-200 p-5"
                type="text"
                name="photourl"
                placeholder="Enter your photo url"
              />
            </div>
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
            <div className="flex items-center gap-2.5">
              <input type="checkbox" name="checkbox" className="h-4 w-4" />
              <p>Accept Term & Conditions</p>
            </div>
            <button
              type="submit"
              className="btn btn-xl btn-primary text-[16px]"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xl"></span>
              ) : (
                "Register"
              )}
            </button>
          </form>
          {error && (
            <p className="text-secondary w-xl my-2.5 text-center">{error}</p>
          )}
        </div>
      </div>
    </MyContainer>
  );
};

export default SignUp;

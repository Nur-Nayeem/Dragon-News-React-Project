import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../auth-context/AuthContext";

const SocialLogin = () => {
  const { signInWithGoole, signInWithGithub } = use(AuthContext);
  const googleSignIn = () => {
    signInWithGoole()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const githubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-3.5">
      <h2 className="text-xl font-semibold text-primary">Login with</h2>
      <div className="flex flex-col gap-2.5 mt-5">
        <button
          onClick={googleSignIn}
          className="btn btn-secondary btn-outline"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button onClick={githubSignIn} className="btn btn-primary btn-outline">
          <FaGithub size={24} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

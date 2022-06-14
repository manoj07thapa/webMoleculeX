import React from "react";
import { Auth } from "aws-amplify";
import SignUpForm from "../../components/auth/SignUpForm";

function SignUp() {
  return (
    <div className="px-12  max-w-md mx-auto mt-4">
      <h2 className="text-2xl text-gray-700 font-bold tracking-wide">
        SignUp for a new account
      </h2>
      <div className="flex flex-col mt-8 space-y-3 ">
        <div>
          <SignUpForm />
        </div>
        <button
          type="submit"
          onClick={() => Auth.federatedSignIn({ provider: "Google" })}
          className="border px-4 py-2 bg-blue-600 text-white rounded-sm shadow-sm w-full"
        >
          SignUp with Google
        </button>
        <button
          type="submit"
          onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
          className="border px-4 py-2 bg-pink-600 text-white rounded-sm shadow-sm w-full"
        >
          SignUp with Facebook
        </button>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { setCurrentUser } from "../../src/user/user.action";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Buttons, FetchTypePost } from "../../lib/utils";
import FormInput from "../../components/formInput";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const notify = () =>
    toast.success("Sign in successful! Redirecting to Dashboard...");
  const userValues = {
    username: "",
    password: "",
  };
  const localSignIn = async () => {
    const data = await FetchTypePost(
      "https://vast-pink-moth-toga.cyclic.app/users/login",
      user
    );
    console.log(data);
    if (data.user) {
      dispatch(setCurrentUser(data));
      notify();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
    console.log(data);
  };

  const [user, setUser] = useState(userValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="h-[100vh] relative bg-veryDark flex items-center justify-center flex-col space-y-5">
      <div
        className="
      text-white font-space  text-center  text-xl 
      "
      >
        <Link className={Buttons.signout + " absolute top-4 left-4"} href="/">
          Back
        </Link>
        <h1>Online Classroom Dashboard</h1>
        <p
          className=" 
        relative z-0
        before:absolute before:inset-0
        before:z-[-10]
        before:block
        before:w-full before:h-full
        before:bg-red-500 before:transform before:skew-x-12 before:scale-110"
        >
          Sign in to OCD
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-desaturatedDark py-4 px-4 rounded-md space-y-5 w-[300px] text-white
          
        "
      >
        <FormInput
          label="Email"
          onChange={(e) => handleChange(e)}
          name="username"
          type="text"
          placeholder="Email"
        />
        <FormInput
          label="Password"
          onChange={(e) => handleChange(e)}
          name="password"
          type="password"
          placeholder="Password"
        />{" "}
        <button
          onClick={localSignIn}
          className={`${Buttons.signout} w-full text-white`}
          type="submit"
        >
          Sign in
        </button>
      </form>
      <div className="flex space-x-2">
        <p className="text-white">Don't have an account?</p>
        <Link href="/signup" className=" text-blue-700">
          Sign up
        </Link>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignIn;

// onClick={localSignIn}

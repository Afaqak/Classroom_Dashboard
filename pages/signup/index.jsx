import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { Buttons,Validate,notify,FetchTypePost } from "../../lib/utils";
import { useRouter } from "next/router";
import FormInput from "../../components/formInput";


const SignUp = () => {
  const router = useRouter();
  const userValues = {
    username: "",
    password: "",
    program: "",
    batch: "",
  };
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState(userValues);

  const submitForm = async () => {
    const errorCheck = Validate(user);
    setErrors(errorCheck);
    console.log(errorCheck);
    try {
      if (Object.keys(errorCheck).length === 0) {
        const data = await FetchTypePost(
          "https://vast-pink-moth-toga.cyclic.app/users/signup",
          user
        );
        console.log(data);
        if (data.success) {
          notify("success", "Sign up");
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          notify("error", "Sign up");
        }
      }
    } catch (error) {
      notify("error", "Sign up");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
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
          className="relative z-10
         before:absolute before:inset-0
         before:z-[-10]
         before:block
         before:w-full before:h-full
         before:bg-red-500 before:transform before:skew-x-12 before:scale-110
        "
        >
          Sign up to OCD
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
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
          errors={errors.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          errors={errors.password}
        />

        <FormInput
          label="Program"
          name="program"
          type="text"
          placeholder="Program"
          onChange={(e) => handleChange(e)}
          errors={errors.program}
        />

        <FormInput
          label="Batch"
          name="batch"
          type="text"
          placeholder="Batch"
          onChange={(e) => handleChange(e)}
          errors={errors.batch}
        />

        <button
          onClick={submitForm}
          className={Buttons.signout + " w-full text-white"}
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="flex space-x-2">
        <p className="text-white">Already have an account? </p>
        <Link href="/signup" className=" text-blue-700">
          Sign in
        </Link>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignUp;

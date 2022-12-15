import { toast } from "react-hot-toast";

export const Buttons = {
  login: "bg-blue-500 text-white font-bold py-1 px-4 hover:bg-blue-700",
  signup: "bg-green-500 text-white font-bold py-1 px-4 hover:bg-green-700",
  signout: "bg-red-500 text-white font-bold py-1 px-4 hover:bg-red-700",
};

export const notify = (type,method) =>{
  if(type === "success"){
    toast.success(`${method} successful! Redirecting to Dashboard...`);
  }else{
    toast.error(`${method} failed!`);
  }
}

export const createAction = (type, payload) => ({ type, payload });

export const Validate = (values) => {
  let errors = {};
  console.log(values);
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.username) {
    errors.email = "Cannot be blank";
  } else if (!regex.test(values.username)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Cannot be blank";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }

  if (!values.program) {
    errors.program = "Cannot be blank";
  } else if (!values.program.length > 3) {
    errors.program = "Cannot be less than 3 characters";
  }

  if (!values.batch) {
    errors.batch = "Cannot be blank";
  } else if (!values.batch.length > 3) {
    errors.batch = "Cannot be less than 3 characters";
  }

  return errors;
};

export const FetchTypePost = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const FetchTypeGet = async (url,data=null) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data}`,
    },
  });
  return response.json();
}

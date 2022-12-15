import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FetchTypeGet } from "../../lib/utils";
const UserAccounts = () => {
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;
      const data= await FetchTypeGet("https://vast-pink-moth-toga.cyclic.app/accounts",user.token);
      console.log(data);
    };
    fetchUser();
  }, []);
  return <div>UserAccounts</div>;
};

export default UserAccounts;

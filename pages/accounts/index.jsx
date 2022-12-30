import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FetchTypeGet } from "../../lib/utils";

const UserAccounts = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  const changeValidity = async (id, validity) => {
    if(!validity) return;
    console.log(typeof id, validity);
    const res = await fetch(
      `https://vast-pink-moth-toga.cyclic.app/accounts/changeValidity/${id} `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ validity }),
      }
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;
      const data = await FetchTypeGet(
        "https://vast-pink-moth-toga.cyclic.app/accounts",
        user.token
      );
      setUsers(data);
      console.log(data);
    };
    fetchUser();
  }, []);

  return (
    <div className=" font-space">
      <h1 className="text-white text-2xl text-center p-5">User Accounts</h1>
      <div>
        {user?.user?.admin ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2
              gap-4
            ">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex flex-col text-white
                  border overflow-hidden border-gray-500 rounded-md 
                "
                > 
                  <h1 className="text-2xl text-center bg-gray-500">{user.username}</h1>
                  <div className="flex items-center justify-between">
                  <div className="mb-4 rounded-md mt-3">
                    <h1 className="ml-2">Email : {user.email}</h1>
                    <h1 className="ml-2">Batch : {user.batch}</h1>
                    <h1 className="ml-2">Program : {user.program}</h1>
                    <h1 className="ml-2">
                      Type : {user.admin ? "Admin" : "User"}
                    </h1>
                    </div>
                    <img 
                      src={`https://robohash.org/${
                        Math.random() * 100
                      }?set=set5&size=100x100`}
                      alt="user"
                      className="w-20 h-20 rounded-full mx-auto"
                    />
                  </div>
                  <div className="px-2 py-2">
                  <select
                    onChange={(e) => changeValidity(user._id, e.target.value)}
                    className="appearance-none text-white px-2 py-1 w-full
                    bg-green-500 rounded-md 
                    focus:outline-none focus:ring-2
                    focus:ring-green-500'
                    focus:border-
              "
                    name="change type"
                    id=""
                  >
                    <option value="valid">select option</option>
                    {user.admin ? (
                      <option value="true">change to user</option>
                    ) : (
                      <option value="true">change to admin</option>
                    )}
                    {user.teacher ? (
                      <option value="true">change to user</option>
                    ) : (
                      <option value="true">change to teacher</option>
                    )}
                  </select>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>Not Admin</h1>
        )}
      </div>
    </div>
  );
};

export default UserAccounts;

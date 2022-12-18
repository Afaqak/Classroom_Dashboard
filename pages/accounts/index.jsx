import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { FetchTypeGet } from "../../lib/utils";
const UserAccounts = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;
      const data= await FetchTypeGet("https://vast-pink-moth-toga.cyclic.app/accounts",user.token);
      setUsers(data);
    };
    fetchUser();
  }, []);
  return (
  <div className="">
    <h1>Accounts</h1>
    <div>
      {
       user?.user?.admin ? (
        <>
       <h1>Admin</h1>
        <div>
          {users.map((user) => (
            <div key={user._id} className='flex'>
              <h1>{user.email}</h1>
              <h1>{user.username}</h1>
              <h1>{user.batch}</h1>
              <h1>{user.program}</h1>
            </div>
          ))}
        </div>
        </>
       ) : <h1>Not Admin</h1>
        
     }
    </div>
  </div>);
};

export default UserAccounts;

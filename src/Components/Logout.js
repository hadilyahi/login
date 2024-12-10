import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { selectUser } from "../features/userSlice";
const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
  const handleLogout = (e) =>{
    e.preventDefault();
    dispatch (logout());
  }
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="font-bold mb-8 text-4xl">
        Welcome <span className="text-[#8a0ada]">{user.name}</span>
        <span className="mx-2">!</span>
      </h1>
      <button
        type="submit"
        className="min-w-[300px] p-4 bg-black border-none text-white text-xl font-bold rounded-lg"
        onClick={(e) => handleLogout(e)}
     >
        Logout
      </button>
    </div>
  );
};

export default Logout;

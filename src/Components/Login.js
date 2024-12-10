import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <form className="flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
        <h1 className=" text-3xl flex justify-center font-bold mb-4">
          Login Here
        </h1>
        <div className=" flex flex-col gap-8 ">
          <input
            type="name"
            placeholder="Name"
            value={name}
            className="min-w-[380px] px-5 pl-4  outline-none rounded-md  border-2 border-black p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="min-w-[380px] px-5 pl-4  outline-none rounded-md  border-2 border-black p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="min-w-[380px] px-5 pl-4  outline-none rounded-md  border-2 border-black p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit "
            className="min-w-[380px] px-[17px] py-[20px] mt-5 bg-black border-none text-white text-md font-bold rounded-xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

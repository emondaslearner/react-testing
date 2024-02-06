import React, { useState } from "react";

// components
import TextInput from "../../components/ui/TextInput";
import Label from "../../components/ui/Label";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../apis/auth";
import { useDispatch } from "react-redux";
import { ChangeLoaderStatus } from "../../store/slice/loader";
import { success } from "../../utils/alert";
import {
  ChangeUserAuthorizeStatus,
  ChangeUserData,
} from "../../store/slice/user";
import { getUserData } from "../../apis/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // user information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitLogin = async (e) => {
    e.preventDefault();

    // set loader
    dispatch(ChangeLoaderStatus(true));
    const loginData = await login({ email, password });
    dispatch(ChangeLoaderStatus(false));

    if (loginData) {
      const { data } = await getUserData(
        `Bearer ${loginData.data.access_token}`
      ); 
      dispatch(
        ChangeUserData({
          id: data.data.id,
          name: data.data.name,
          email: data.data.email,
        })
      );
      localStorage.removeItem('token');
      localStorage.setItem("token", `Bearer ${loginData.data.access_token}`);
      dispatch(ChangeUserAuthorizeStatus(true));
      success({ message: "Successfully LoggedIn" });
      navigate("/");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div
        style={{
          boxShadow: "1px 1px 10px gray",
        }}
        className="w-[500px] p-[30px] rounded-[10px]"
        data-testid="main-login"
      >
        <div data-testid="header-login" className="flex items-center justify-between">
          <FaArrowLeft
            data-testid="backArrow-login"
            size={20}
            className="cursor-pointer mb-3"
            onClick={() => navigate(-1)}
          />
          <h3 data-testid="title-login" className="text-center text-[22px] font-semibold mb-[20px]">
            Login
          </h3>
          <div></div>
        </div>

        <form onSubmit={SubmitLogin} action="">
          <div data-testid="login-email" className="flex flex-col">
            <Label htmlFor="">Email:</Label>
            <TextInput
              type="email"
              className="mt-1 rounded-[5px]"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="login-email-input"
            />
          </div>
          <div data-testid="login-password" className="flex flex-col mt-2">
            <Label htmlFor="">Password:</Label>
            <PasswordInput
              className="mt-1 rounded-[5px]"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="login-password-input"
            />
          </div>
          <Button
            type="submit"
            className="mt-[30px] !rounded-[5px] mx-auto table !px-20"
            data-testid="login-button"
          >
            Submit
          </Button>
        </form>
        <p className="text-center mt-3">
          Do not have any account?{" "}
          <Link to="/sign-up" className="text-blue_ hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

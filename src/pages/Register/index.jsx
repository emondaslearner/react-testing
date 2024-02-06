import React, { useState } from "react";

// components
import TextInput from "../../components/ui/TextInput";
import Label from "../../components/ui/Label";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../apis/auth";
import { useDispatch } from "react-redux";
import { ChangeLoaderStatus } from "../../store/slice/loader";
import { getUserData } from "../../apis/user";
import {
  ChangeUserAuthorizeStatus,
  ChangeUserData,
} from "../../store/slice/user";
import { success } from "../../utils/alert";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    dispatch(ChangeLoaderStatus(true));
    const resData = await registerUser({ name, email, password });
    dispatch(ChangeLoaderStatus(false));

    if (resData) {
      const { data } = await getUserData(`Bearer ${resData.data.access_token}`);
      dispatch(
        ChangeUserData({
          id: data.data.id,
          name: data.data.name,
          email: data.data.email,
        })
      );
      localStorage.removeItem("token");
      localStorage.setItem("token", `Bearer ${resData.data.access_token}`);
      dispatch(ChangeUserAuthorizeStatus(true));
      success({ message: "Successfully Registered" });
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
      >
        <div className="flex items-center justify-between">
          <FaArrowLeft
            size={20}
            className="cursor-pointer mb-3"
            onClick={() => navigate(-1)}
            data-testid="res-arrow"
          />
          <h3 data-testid="res-heading" className="text-center text-[22px] font-semibold mb-[20px]">
            Register
          </h3>
          <div></div>
        </div>

        <form onSubmit={register} action="">
          <div className="flex flex-col">
            <Label data-testid="res-name-level" htmlFor="">Name:</Label>
            <TextInput
              type="text"
              className="mt-1 rounded-[5px]"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              data-testid="res-name"
            />
          </div>
          <div className="flex flex-col mt-2">
            <Label data-testid="res-email-level" htmlFor="">Email:</Label>
            <TextInput
              type="email"
              className="mt-1 rounded-[5px]"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="res-email"
            />
          </div>
          <div className="flex flex-col mt-2">
            <Label data-testid="res-password-level" htmlFor="">Password:</Label>
            <PasswordInput
              className="mt-1 rounded-[5px]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="res-password"
            />
          </div>

          <Button
            type="submit"
            className="mt-[30px] !rounded-[5px] mx-auto table !px-20"
            data-testid="res-btn"
          >
            Submit
          </Button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue_ hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

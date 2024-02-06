import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainLoader } from "../components/shared/Loader";
import { queryClient } from "../App";

const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();

  const authorized = useSelector((state) => state.user.authorized);
  const loadingStatus = useSelector((state) => state.user.loadingStatus);
  const userData = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");

  if (!token) {
    queryClient.invalidateQueries();
    navigate("/login");
  }

  if (!authorized && !loadingStatus) {
    navigate("/login");
  }

  return <>{userData.id ? children  : <MainLoader />}</>;
};

export default PrivateRoutes;

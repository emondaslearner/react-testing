import React, { useEffect } from "react";

// routes
import routes from "../Routes";

// third party
import { Route, Routes } from "react-router-dom";

// custom components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PublicRoutes from "../security/PublicRoutes";
import PrivateRoutes from "../security/PrivateRoutes";
import { MainLoader } from "../components/shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { ChangeUserAuthorizeStatus } from "../store/slice/user";

const Layouts = () => {
  const loaderStatus = useSelector((state) => state.loader.loader);
  const dispatch = useDispatch();

  const authorized = useAuth();
  useEffect(() => {
    dispatch(ChangeUserAuthorizeStatus(authorized));
  }, [dispatch, authorized]);

  return (
    <>
      <AppRoutes />
      {loaderStatus && <MainLoader />}
    </>
  );
};

export default Layouts;

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          element={
            <>
              {route?.meta?.publicRoutes ? (
                <PublicRoutes>
                  {route?.meta?.layout !== "empty" && <Navbar />}
                  {route.element}
                  {route?.meta?.layout !== "empty" && <Footer />}
                </PublicRoutes>
              ) : (
                <PrivateRoutes>
                  {route?.meta?.layout !== "empty" && <Navbar />}
                  {route.element}
                  {route?.meta?.layout !== "empty" && <Footer />}
                </PrivateRoutes>
              )}
            </>
          }
        />
      ))}
    </Routes>
  );
};

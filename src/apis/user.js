import axios from "../axios";

export const getUserData = (token) => {
  return axios
    .get("/user", {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => {
      return {
        error: false,
        data: data.data,
      };
    })
    .catch((err) => {
      return {
        error: true,
        err,
      };
    });
};

export const getAllBlogsOfParticularUser = ({ id }) => {
  const token = localStorage.getItem("token");
  return axios
    .get(`/user/${id}/articles`, {
      headers: {
        Authorization: token,
      },
    })
    .then((data) => {
      return {
        error: false,
        data: data?.data,
      };
    })
    .catch((err) => {
      return {
        error: true,
        err,
      };
    });
};

import axios from "../axios";
import { error } from "../utils/alert";

export const login = ({ email, password }) => {
  return axios
    .post("/auth/sign-in", {
      email,
      password,
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      error({ message: err.response.data.message });
      return;
    });
};

export const registerUser = ({ name, email, password }) => {
  return axios
    .post("/auth/sign-up", {
      name,
      email,
      password,
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      error({ message: err.response.data.message });
    });
};

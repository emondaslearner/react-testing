import fetch from "axios";
import { error } from "./utils/alert";

export const baseURL = "http://localhost:5000/api/v1";

const axios = fetch.create({
  baseURL
});

// handle 401 error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const responseUrl = err.request.responseURL;
    const checkUrl = responseUrl.split("/");
    if (
      err.response &&
      err.response.status === 401 &&
      checkUrl[checkUrl.length - 1] !== "user"
    ) {
      error({ message: "Unauthorized. Please login to proceed" });
      localStorage.removeItem("token");
    }
    return Promise.reject({
      ...err,
      unauthorized: true,
    });
  }
);

export default axios;

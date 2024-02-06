import axios from "../axios";

export const getAllBlog = ({
  page = 1,
  limit = 10,
  sortType = "dsc",
  sortBy = "updatedAt",
  search = "",
}) => {
  return axios
    .get(
      `/articles?page=${page}&limit=${limit}&sortType=${sortType}&sortBy=${sortBy}&search=${search}`
    )
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

export const getBlogById = (id) => {
  return axios
    .get(`/article/${id}`)
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

export const addBlog = ({ title, content }) => {
  const token = localStorage.getItem("token");
  return axios
    .post(
      "/articles",
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
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

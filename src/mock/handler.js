import { rest } from "msw";
import { baseURL } from "../axios";

export const blogData = {
  code: 200,
  message: "Data fetched successfully",
  data: [
    {
      title: "this is the testing title2",
      content: "this is the testing description2",
      id: "65bf282867a7342a7d379145",
      author: {
        _id: "65be3b1d5e751eb30433d211",
        name: "Jone deo",
      },
      status: "waiting for approval",
      updatedAt: "2024-02-04T06:01:12.872Z",
      link: "/articles/65bf282867a7342a7d379145",
    },
    {
      title: "this is testing title",
      content: "this is testing description",
      id: "65bf27dd67a7342a7d379134",
      author: {
        _id: "6583d2e79cd86e1f6fdde7f0",
        name: "Emon das",
      },
      status: "waiting for approval",
      updatedAt: "2024-02-04T05:59:57.845Z",
      link: "/articles/65bf27dd67a7342a7d379134",
    },
  ],
  self: "/api/v1/articles?page=1&limit=20&sortType=dsc&sortBy=updatedAt&search=",
  links: {
    nxtPage: "//api/v1/articles/?page=2&limit=20&sortType=dsc&sortBy=updatedAt",
  },
  pagination: {
    page: 1,
    limit: 20,
    nxtPage: 2,
    totalPage: 2,
    totalResource: 30,
  },
};

export const singleBlogData = {
  code: 200,
  message: "Data fetched successfully",
  data: {
    _id: "65bf282867a7342a7d379145",
    title: "this is the testing title2",
    content: "this is the testing description2",
    author: "65be3b1d5e751eb30433d211",
    status: "waiting for approval",
    createdAt: "2024-02-04T06:01:12.872Z",
    updatedAt: "2024-02-04T06:01:12.872Z",
    __v: 0,
    id: "65bf282867a7342a7d379145",
  },
  self: "/article/65bf282867a7342a7d379145",
  links: {
    user: "user/65be3b1d5e751eb30433d211",
    comment: "/article/65bf282867a7342a7d379145/comments",
  },
};

export const loginResponseData = {
  code: 200,
  data: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODNkMmU3OWNkODZlMWY2ZmRkZTdmMCIsIm5hbWUiOiJFbW9uIGRhcyIsImVtYWlsIjoiZW1vbmRhc3ByaXZhdGVAZ21haWwuY29tIiwiaWF0IjoxNzA3MTI2Njc5LCJleHAiOjE3MDcxMzAyNzl9._p7N89dRUsRUMeilyzibzqqGILQ7vq9GzGs7qOiW8i8",
  },
  self: "/auth/sign-in",
  links: {
    articles:
      "/articles?sortType=des&sortBy=updatedAt&limit=100&page=1&expand=comment",
    user: "/user/6583d2e79cd86e1f6fdde7f0",
  },
};

export const userData = {
  code: 200,
  message: "Successfully fetched user data",
  data: {
    _id: "6583d2e79cd81f6fdde7f0",
    name: "Example name",
    email: "user@example.com",
    password: "helloWorld",
    status: "pending",
    role: "user",
    createdAt: "2023-12-21T05:53:43.861Z",
    updatedAt: "2023-12-21T05:53:43.861Z",
    __v: 0,
    id: "6583d2e79cd86e1fdde7f0",
  },
  self: "/api/v1/user",
};

export const addingBlog = {
  code: 201,
  message: "Successfully created post",
  data: {
    _id: "65bf282867a7342a7d379145",
    title: "this is the testing title2",
    content: "this is the testing description2",
    author: "65be3b1d5e751eb30433d211",
    status: "waiting for approval",
    createdAt: "2024-02-04T06:01:12.872Z",
    updatedAt: "2024-02-04T06:01:12.872Z",
    __v: 0,
    id: "65bf282867a7342a7d379145",
  },
  self: "/articles",
  links: {
    createdPost: "/article/5874",
    comments: "/comment/5874",
  },
};

export const userArticles = {
  code: 200,
  message: "Data fetched successfully",
  data: [
    {
      title: "this is the testing title2",
      content: "this is the testing description2",
      id: "65bf282867a7342a7d379145",
      status: "waiting for approval",
      updatedAt: "2024-02-04T06:01:12.872Z",
      link: "/65be3b1d5e751eb30433d211/articles/65bf282867a7342a7d379145",
    },
    {
      title: "asdf asdf asdf ks",
      content: "asd fasdf asdf asdf sdf sdf ks",
      id: "65be86dce3442c29f4f3459c",
      status: "waiting for approval",
      updatedAt: "2024-02-03T18:33:00.447Z",
      link: "/65be3b1d5e751eb30433d211/articles/65be86dce3442c29f4f3459c",
    },
    {
      title: "asdf asdf asdfls",
      content: "asdf asdf asdf asdf asdfls",
      id: "65be86a4e3442c29f4f3458a",
      status: "waiting for approval",
      updatedAt: "2024-02-03T18:32:04.804Z",
      link: "/65be3b1d5e751eb30433d211/articles/65be86a4e3442c29f4f3458a",
    },
    {
      title: "asdf asdf asdf ",
      content:
        "asd fasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf adsf asdf ",
      id: "65be843a8d18caed1cd7e2a1",
      status: "waiting for approval",
      updatedAt: "2024-02-03T18:21:46.171Z",
      link: "/65be3b1d5e751eb30433d211/articles/65be843a8d18caed1cd7e2a1",
    },
  ],
  self: "/api/v1/user/65be3b1d5e751eb30433d211/articles",
  links: {},
  pagination: {
    page: 1,
    limit: 10,
    totalPage: 1,
    totalResource: 6,
  },
};

export const registerData = {
  code: 201,
  message: "Successfully created account",
  data: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzBkMzM5N2E0M2Q5ZGE4ODVhMGI4NyIsIm5hbWUiOiJUaGlzIiwiZW1haWwiOiJoZWxsb0BnbWFpbC5jb20iLCJpYXQiOjE3MDcxMzU4MDEsImV4cCI6MTcwNzEzOTQwMX0.LNEefk9xJof7JDHTB9lMtdpLO8bUVnJ4jPROBu4Sfck",
  },
  self: "/api/v1/auth/sign-up",
  links: {
    articles:
      "/articles?sortType=des&sortBy=updatedAt&limit=100&page=1&expand=comment",
    user: "/user/65c0d3397a43d9da885a0b87",
    login: "/auth/sign-in",
  },
};

export const handlers = [
  rest.get(`${baseURL}/articles`, (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get("search");
    let filteredData = blogData;

    if (searchQuery) {
      filteredData = blogData.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return res(ctx.status(200), ctx.json(filteredData));
  }),
  rest.get(`${baseURL}/article/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(singleBlogData));
  }),
  rest.post(`${baseURL}/auth/sign-in`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginResponseData));
  }),
  rest.get(`${baseURL}/user`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userData));
  }),
  rest.post(`${baseURL}/articles`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(addingBlog));
  }),
  rest.get(`${baseURL}/user//articles`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userArticles));
  }),
  rest.post(`${baseURL}/auth/sign-up`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(loginResponseData));
  }),
];

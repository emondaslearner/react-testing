import React from "react";

// components
import AddBlog from "./AddBlog";
import MyBlogs from "./MyBlogs";

const Profile = () => {
  return (
    <div className="max-w-[1500px] mx-auto w-[95%]">
      <AddBlog />
      <MyBlogs />
    </div>
  );
};

export default Profile;

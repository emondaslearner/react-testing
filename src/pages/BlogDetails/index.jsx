import React from "react";
import { useQuery } from "react-query";

// components
import { useParams } from "react-router-dom";
import { getBlogById } from "../../apis/blog";
import { PageLoader } from "../../components/shared/Loader";

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getBlogById(id),
    queryKey: ["blogs", { id }],
    staleTime: Infinity,
  });

  const blogData = data?.data?.data;

  if (isLoading)
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <PageLoader />
      </div>
    );

  return (
    <div className="max-w-[1500px] mx-auto w-[95%]">
      <div data-testid="blogDetails-main" className="max-w-[60%] mx-auto">
        <img
          data-testid="blogDetails-img"
          className="mx-auto max-h-[450px] w-full"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt={blogData.title}
        />

        <h2
          data-testid="blogDetails-title"
          className="text-[25px] font-bold mt-5"
        >
          {blogData.title}
        </h2>
        <p data-testid="blogDetails-content" className="mt-2 text-[18px]">
          {blogData.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;

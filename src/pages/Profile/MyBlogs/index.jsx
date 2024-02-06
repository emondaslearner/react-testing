import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { PageLoader } from "../../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
import { getAllBlogsOfParticularUser } from "../../../apis/user";

const MyBlogs = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);

  const { data, isLoading } = useQuery({
    queryFn: () => getAllBlogsOfParticularUser({ id: userData.id }),
    queryKey: ["userArticle"],
    staleTime: Infinity,
  });

  if (isLoading)
    return (
      <div className="w-full h-[500px] flex justify-center items-center">
        <PageLoader />
      </div>
    );

  return (
    <div data-testid="user-blog-main" className="mt-10">
      <h1 data-testid="user-blog-title" className="text-[20px] font-bold mt-4">My Blogs</h1>

      <div className="grid grid-cols-3 gap-[20px] mt-10">
        {data?.data?.data?.length > 0 &&
          data.data.data.map((data, i) => {
            const month = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];

            const date = new Date(data.updatedAt);

            return (
              <div
                className="w-full cursor-pointer hover:shadow-xl transition-all duration-300 rounded-br-[20px] rounded-bl-[20px]"
                key={i}
                onClick={() => navigate(`/blog/${data.id}`)}
                data-testid="user-blog-single"
              >
                <img
                  src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww"
                  alt={data.title}
                  className="rounded-tr-[20px] rounded-tl-[20px] w-full"
                  data-testid="single-user-blog-img"
                />

                <div className="mt-[20px] p-[15px] !pt-0">
                  <div className="flex items-center gap-x-[10px]">
                    <p className="font-bold text-black_">Posted Date: </p>
                    <span className="text-gray_">
                      {" "}
                      {month[date.getMonth()]} {date.getDate()},{" "}
                      {date.getFullYear()}
                    </span>
                  </div>

                  <h3 className="text-[20px] mt-[10px] leading-6 font-bold" data-testid="single-user-blog-title">
                    {data.title}
                  </h3>
                  <p className="mt-[10px] text-gray_ max-h-[50px] overflow-hidden" data-testid="single-user-blog-content">
                    {data.content}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyBlogs;

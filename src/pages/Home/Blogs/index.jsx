import React from "react";
import { useQuery } from "react-query";
import { getAllBlog } from "../../../apis/blog";
import { PageLoader } from "../../../components/shared/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const apiStatus = useSelector((state) => state.blog);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryFn: () =>
      getAllBlog({
        page: apiStatus.page,
        limit: apiStatus.limit,
        sortType: apiStatus.sortType,
        sortBy: apiStatus.sortBy,
        search: apiStatus.search,
      }),
    queryKey: ["blogs", { search: apiStatus.search }],
    staleTime: Infinity,
  });

  if (isLoading)
    return (
      <div className="h-[500px] flex justify-center items-center">
        <PageLoader />
      </div>
    );

  return (
    <div data-testid="blog-main" className="grid grid-cols-3 gap-[20px]">
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
              data-testid="single-blog"
            >
              <img
                src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww"
                alt="Blog"
                className="rounded-tr-[20px] rounded-tl-[20px] w-full"
                data-testid="blog-img"
              />

              <div className="mt-[20px] p-[15px] !pt-0">
                <div className="flex items-center gap-x-[10px]">
                  <p className="font-bold text-black_">Posted Date: </p>
                  <span data-testid="blog-date" className="text-gray_">
                    {" "}
                    {month[date.getMonth()]} {date.getDate()},{" "}
                    {date.getFullYear()}
                  </span>
                </div>

                <h3 data-testid="blog-title" className="text-[20px] mt-[10px] leading-6 font-bold">
                  {data.title}
                </h3>
                <p data-testid="blog-content" className="mt-[10px] text-gray_ max-h-[50px] overflow-hidden">
                  {data.content}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Blogs;

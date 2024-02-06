/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from "@testing-library/react";
import BlogDetails from "../../pages/BlogDetails";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../mock/server";
import { singleBlogData } from "../../mock/handler";

test("blog details testing", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BlogDetails />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByTestId("blogDetails-main")).toBeInTheDocument();
  });

  const title = screen.getByTestId("blogDetails-title");
  const content = screen.getByTestId("blogDetails-content");
  const img = screen.getByTestId("blogDetails-img");

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(singleBlogData.data.title);
  expect(title).toHaveAttribute("class", "text-[25px] font-bold mt-5");

  expect(content).toBeInTheDocument();
  expect(content).toHaveTextContent(singleBlogData.data.content);
  expect(content).toHaveAttribute("class", "mt-2 text-[18px]");

  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
  );
  expect(img).toHaveAttribute("alt", singleBlogData.data.title);
  expect(img).toHaveAttribute("class", "mx-auto max-h-[450px] w-full");
});

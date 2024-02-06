/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import Blogs from "../../pages/Home/Blogs";
import { blogData } from "../../mock/handler";
import { queryClient } from "../../mock/server";

describe("homepage testing", () => {
  test("first testing", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Blogs />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("blog-main")).toBeInTheDocument();
    });

    const singleBlogs = screen.getAllByTestId("single-blog");
    expect(singleBlogs).toHaveLength(blogData.data.length);

    const blogTitle = screen.getAllByTestId("blog-title");
    const blogContent = screen.getAllByTestId("blog-content");
    const blogImage = screen.getAllByTestId("blog-img");

    for (let i = 0; i < singleBlogs.length; i++) {
      expect(blogTitle[i]).toBeInTheDocument();
      expect(blogTitle[i]).toHaveTextContent(blogData.data[i].title);
      expect(blogContent[i]).toBeInTheDocument();
      expect(blogContent[i]).toHaveTextContent(blogData.data[i].content);
      expect(blogImage[i]).toBeInTheDocument();
      expect(blogImage[i]).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww"
      );
    }
  });
});

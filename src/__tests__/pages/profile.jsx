/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Profile from "../../pages/Profile";
import { Provider } from "react-redux";
import store from "../../store/store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../mock/server";
import { MemoryRouter } from "react-router-dom";
import { userArticles } from "../../mock/handler";

describe("profile page testing", () => {
  // add task testing
  test("add task", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Profile />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );

    const heading = screen.getByTestId("add-blog-heading");
    const form = screen.getByTestId("add-blog-form");
    const titleDiv = screen.getByTestId("add-blog-title");
    const titleLabel = screen.getByTestId("add-blog-title-label");
    const titleInput = screen.getByTestId("add-blog-title-input");
    const contentDiv = screen.getByTestId("add-blog-content");
    const contentLabel = screen.getByTestId("add-blog-content-label");
    const contentInput = screen.getByTestId("add-blog-content-input");
    const btn = screen.getByTestId("add-blog-btn");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Add Blogs");
    expect(heading).toHaveAttribute("class", "text-[20px] font-bold mt-4");

    expect(form).toBeInTheDocument();

    expect(titleDiv).toBeInTheDocument();
    expect(titleDiv).toHaveAttribute("class", "mt-3");

    expect(titleLabel).toBeInTheDocument();
    expect(titleLabel).toHaveTextContent("Title");

    expect(contentDiv).toBeInTheDocument();
    expect(contentDiv).toHaveAttribute("class", "mt-3");

    expect(contentLabel).toBeInTheDocument();
    expect(contentLabel).toHaveTextContent("Content");

    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveAttribute("type", "text");
    expect(titleInput).toHaveAttribute("placeholder", "Enter Title");
    expect(titleInput).toBeRequired();

    expect(contentInput).toBeInTheDocument();
    expect(contentInput).toHaveAttribute("cols", "30");
    expect(contentInput).toHaveAttribute("rows", "10");
    expect(contentInput).toHaveAttribute("placeholder", "Enter Content");
    expect(contentInput).toBeRequired();

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Add Blog");
    expect(btn).toHaveAttribute("type", "submit");

    fireEvent.change(titleInput, {
      target: { value: "This is blog testing title" },
    });
    expect(titleInput).toHaveAttribute("value", "This is blog testing title");

    fireEvent.change(contentInput, {
      target: { value: "This is blog testing content" },
    });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(titleInput).toHaveAttribute("value", "");
    });
  });

  // my blogs
  test("my blogs", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Profile />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );

    let mainDiv;
    await waitFor(() => {
      mainDiv = screen.getByTestId("user-blog-main");
    });

    const heading = screen.getByTestId("user-blog-title");

    expect(mainDiv).toBeInTheDocument();
    expect(mainDiv).toHaveAttribute("class", "mt-10");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("class", "text-[20px] font-bold mt-4");
    expect(heading).toHaveTextContent("My Blogs");

    let singleBlog;
    await waitFor(() => {
      singleBlog = screen.getAllByTestId("user-blog-single");
    });

    expect(singleBlog).toHaveLength(userArticles.data.length);
    const img = screen.getAllByTestId('single-user-blog-img');
    const title = screen.getAllByTestId('single-user-blog-img');
    const content = screen.getAllByTestId('single-user-blog-img');

    for(let i = 0;i < userArticles.data.length;i++) {
        expect(img[i]).toBeInTheDocument();
        expect(img[i]).toHaveAttribute('src', 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww');
        expect(img[i]).toHaveAttribute('alt', userArticles.data[i].title);
        expect(title[i]).toBeInTheDocument();
        expect(content[i]).toBeInTheDocument();
    }
  });
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "../../../../Layout/Components/Navbar";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import { MemoryRouter } from "react-router-dom";
import { ChangeBlogSearchApiCall } from "../../../../store/slice/blog";
import userEvent from "@testing-library/user-event";

describe("navbar testing", () => {
  store.dispatch = jest.fn();
  test("navbar testing", async () => {
    userEvent.setup();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    
    const navLogo = screen.getByTestId("nav-logo-link");
    expect(navLogo).toBeInTheDocument();
    const blogSearch = screen.getByTestId("blog-search");
    expect(blogSearch).toBeInTheDocument();
    fireEvent.change(blogSearch, { target: { value: "Searching" } });
    const blogSearchBtn = screen.getByTestId("blog-search-btn");
    expect(blogSearchBtn).toBeInTheDocument();
    fireEvent.click(blogSearchBtn);
    expect(store.dispatch).toHaveBeenCalledWith(
      ChangeBlogSearchApiCall("Searching")
    );

    const login = screen.getByTestId('login-btn');
    const register = screen.getByTestId('register-btn');
    expect(login).toBeInTheDocument();
    expect(register).toBeInTheDocument();
  });
});

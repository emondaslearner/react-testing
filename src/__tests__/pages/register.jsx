import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Register from "../../pages/Register";
import { Provider } from "react-redux";
import store from "../../store/store";
import { MemoryRouter } from "react-router-dom";

describe("register testing", () => {
  test("register flow test", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    const arrow = screen.getByTestId("res-arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveAttribute("class", "cursor-pointer mb-3");

    const heading = screen.getByTestId("res-heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Register");

    const nameLevel = screen.getByTestId("res-name-level");
    const name = screen.getByTestId("res-name");
    expect(nameLevel).toBeInTheDocument();
    expect(nameLevel).toHaveTextContent("Name:");
    expect(name).toBeInTheDocument();

    const emailLevel = screen.getByTestId("res-email-level");
    const email = screen.getByTestId("res-email");
    expect(emailLevel).toBeInTheDocument();
    expect(emailLevel).toHaveTextContent("Email:");
    expect(email).toBeInTheDocument();

    const passwordLevel = screen.getByTestId("res-password-level");
    const password = screen.getByTestId("res-password");
    expect(passwordLevel).toBeInTheDocument();
    expect(passwordLevel).toHaveTextContent("Password:");
    expect(password).toBeInTheDocument();

    const btn = screen.getByTestId("res-btn");
    expect(btn).toBeInTheDocument();

    fireEvent.change(name, { target: { value: "Jone" } });
    expect(name).toHaveAttribute("value", "Jone");

    fireEvent.change(email, { target: { value: "user@example.com" } });
    expect(email).toHaveAttribute("value", "user@example.com");

    fireEvent.change(password, { target: { value: "helloWorld" } });
    expect(password).toHaveAttribute("value", "helloWorld");

    fireEvent.click(btn);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});

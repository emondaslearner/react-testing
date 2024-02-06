import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../../pages/Login";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import React from "react";

test("login testing", async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );

  const mainLogin = screen.getByTestId("main-login");
  expect(mainLogin).toBeInTheDocument();
  expect(mainLogin).toHaveAttribute(
    "class",
    "w-[500px] p-[30px] rounded-[10px]"
  );

  const title = screen.getByTestId("title-login");
  const backArrow = screen.getByTestId("backArrow-login");
  const header = screen.getByTestId("header-login");

  expect(title).toBeInTheDocument();
  expect(backArrow).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(title).toHaveTextContent("Login");
  expect(title).toHaveAttribute(
    "class",
    "text-center text-[22px] font-semibold mb-[20px]"
  );
  expect(backArrow).toHaveAttribute("class", "cursor-pointer mb-3");
  expect(header).toHaveAttribute("class", "flex items-center justify-between");

  const loginEmail = screen.getByTestId("login-email");
  expect(loginEmail).toBeInTheDocument();
  expect(loginEmail).toHaveAttribute("class", "flex flex-col");

  const loginPassword = screen.getByTestId("login-password");
  expect(loginPassword).toBeInTheDocument();
  expect(loginPassword).toHaveAttribute("class", "flex flex-col mt-2");

  const loginButton = screen.getByTestId("login-button");
  expect(loginButton).toBeInTheDocument();

  const loginEmailInput = screen.getByTestId("login-email-input");
  fireEvent.change(loginEmailInput, { target: { value: "user@example.com" } });
  expect(loginEmailInput.value).toBe("user@example.com");

  const loginPasswordInput = screen.getByTestId("login-password-input");
  fireEvent.change(loginPasswordInput, { target: { value: "helloWorld" } });
  expect(loginPasswordInput.value).toBe("helloWorld");

  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(window.location.pathname).toBe("/");
  });
});

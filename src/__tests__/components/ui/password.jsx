/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import PasswordInput from "../../../components/ui/PasswordInput";

describe("password input testing", () => {
  test("password input test", () => {
    const placeholder = "placeholder";
    render(<PasswordInput placeholder={placeholder} className="check" />);
    const input = screen.getByTestId("password");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", placeholder);
    const btnClass = input.className;
    expect(btnClass).toMatch(
      /outline-none bg-transparent py-2 px-\[20px\] border-\[1px\] border-gray-400 w-full/i
    );
  });

  test("show hide button test", () => {
    render(<PasswordInput />);
    const div = screen.getByTestId("password-status");
    expect(div).toBeInTheDocument();
    const divClass = div.className;
    expect(divClass).toBe("absolute top-[35%] right-[10px]");
  });
});

// integrated testing
describe("check interactions", () => {
  test("check btn interactions", async () => {
    render(<PasswordInput />);
    const btnFirst = screen.getByTestId("password-hidden");
    fireEvent.click(btnFirst);
    const btnSecond = screen.getByTestId("password-show");
    expect(btnSecond).toBeInTheDocument();
    expect(btnFirst).not.toBeInTheDocument();
    fireEvent.click(btnSecond);
    expect(btnSecond).not.toBeInTheDocument();
  });
});

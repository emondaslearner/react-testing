import { render, screen } from "@testing-library/react";
import Button from "../../../components/ui/Button";

test("button testing", () => {
  const className = "test";
  render(<Button className={className} />);
  const btn = screen.getByTestId("button");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveAttribute("class");
});

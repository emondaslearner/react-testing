import { render, screen } from "@testing-library/react";
import Label from "../../../components/ui/Label";

test("label", () => {
  const htmlFor = "email-input";
  render(<Label htmlFor={htmlFor} />);
  const label = screen.getByTestId("label");
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("class");
  expect(label).toHaveAttribute("for", htmlFor);
});

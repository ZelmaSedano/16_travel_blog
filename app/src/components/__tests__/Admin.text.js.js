import {
  getByPlaceholderText,
  render,
} from "@testing-library/react";
import App from "../../App";
// import Admin from "./components/Form";

describe("<App />", () => {
  test("renders the form correctly", () => {
    const { getByPlaceholderText } = render(<App />);
    const titleInput = getByPlaceholderText("Title");
    const dateInput = getByPlaceholderText("Date");
    const placesInput = getByPlaceholderText("Places to Visit");
    expect(titleInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(placesInput).toBeInTheDocument();
    expect(ageInput).toHaveAttribute("type", "number");
})});
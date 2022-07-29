import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("test for Navbar", () => {
  test("test to return particular string", () => {
    render(<Navbar />, {
      wrapper: MemoryRouter,
    });
    expect(screen.getByText("European Countries")).toBeInTheDocument();
  });
});

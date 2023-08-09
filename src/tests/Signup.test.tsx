import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../pages/Signup";

describe("<Signup/>", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
  });
  //화면에 렌더되는지 확인
  test("Render title and input", () => {
    const title = screen.getByRole("h1", { name: "회원가입" });
    expect(title).toBeInTheDocument();

    const emailInput = screen.getByRole("input", { name: "email" });
    const passwordInput = screen.getByRole("input", { name: "password" });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  //email 유효성 검사 동작하는지 확인
  test("Invalid email input", () => {
    const emailInput = screen.getByRole("input", { name: "email" });
    fireEvent.change(emailInput, { target: { value: "invalid input value" } });
    expect(emailInput).toHaveClass("invalid");
  });
  // password 유효성 검사 동작하는지 확인
  test("password input validation", () => {
    const passwordInput = screen.getByRole("input", { name: "password" });
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(passwordInput).toHaveClass("invalid");
  });

  test("enable signup button after validation", () => {
    const emailInput = screen.getByRole("input", { name: "email" });
    const passwordInput = screen.getByRole("input", { name: "password" });
    const signupButton = screen.getByRole("button", { name: "회원가입" });

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(signupButton).not.toBeDisabled();
  });
});

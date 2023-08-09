import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signin from "../pages/Signin";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Signup/>", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Signin />
      </MemoryRouter>
    );
  });

  //화면에 렌더되는지 확인
  test("Render title and input", () => {
    const title = screen.getByRole("h1", { name: "로그인" });
    expect(title).toBeInTheDocument();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  //email 유효성 검사 동작하는지 확인
  test("Invalid email input", () => {
    const emailInput = screen.getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "invalid input value" } });
    expect(emailInput).toHaveClass("invalid");
  });

  // password 유효성 검사 동작하는지 확인
  test("password input validation", () => {
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(passwordInput).toHaveClass("invalid");
  });

  // 유효성 검사 통과시 버튼 disable 해제 되는지 확인
  test("enable login button after validation", () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signinButton = screen.getByTestId("signin-button");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(signinButton).not.toBeDisabled();
  });

  //로그인 버튼 누를시 api요청 후 todo로 리다이렉트 되는지 확인
  test("signinAPI request successful and redirect todo", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signinButton = screen.getByTestId("signin-button");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    mockedAxios.post.mockResolvedValueOnce({ status: 200 });

    fireEvent.click(signinButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/todo");
    });
  });
});

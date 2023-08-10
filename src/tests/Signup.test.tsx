import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import Signup from "../pages/Signup";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

  // password 유효성 검사 동작 하는지 확인
  test("password input validation", () => {
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(passwordInput).toHaveClass("invalid");
  });

  // 유효성 검사 통과시 버튼 disable 동작하는지 확인
  test("enable signup button after validation", () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signupButton = screen.getByTestId("signup-button");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(signupButton).not.toBeDisabled();
  });

  //API 통신 테스트 후 성공시 리다이렉트 동작 확인
  test("signupAPI request successful and redirect signin", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signupButton = screen.getByTestId("signup-button");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    mockedAxios.post.mockResolvedValueOnce(() => {
      //로딩 컴포넌트가 뜨는지 확인
      const loadingComponent = screen.getByTestId("loading");
      expect(loadingComponent).toBeInTheDocument();
      return Promise.resolve({ status: 200 });
    });

    fireEvent.click(signupButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/signin");
    });
  });
});

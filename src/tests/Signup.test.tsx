import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  prettyDOM,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Signup from "../pages/Signup";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Signup/>", () => {
  beforeEach(() => {
    render(<Signup />, { wrapper: BrowserRouter });
  });
  //화면에 렌더되는지 확인
  test("Render title and input", () => {
    const title = screen.getByRole("heading", { name: /회원가입/i });
    expect(title).toBeInTheDocument();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  //email 유효성 검사 동작하는지 확인
  test("Invalid email input", () => {
    const emailInput = screen.getByTestId("email-input");
    const signupButton = screen.getByTestId("signup-button");
    fireEvent.change(emailInput, { target: { value: "invalid input value" } });
    expect(signupButton).toBeDisabled();
  });

  // password 유효성 검사 동작 하는지 확인
  test("password input validation", () => {
    const passwordInput = screen.getByTestId("password-input");
    const signupButton = screen.getByTestId("signup-button");
    fireEvent.change(passwordInput, { target: { value: "short" } });
    expect(signupButton).toBeDisabled();
  });

  // 유효성 검사 통과시 버튼 disable 동작하는지 확인
  test("enable signup button after validation", () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signupButton = screen.getByTestId("signup-button");
    act(() => {
      userEvent.type(emailInput, "test@test.com");
      userEvent.type(passwordInput, "testpassword");
    });
    // fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    // fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(signupButton).not.toBeDisabled();

    // expect(signupButton).not.toBeDisabled()
  });

  //취소 버튼 누를시 home으로 리다이렉트 되는지 확인
  test("cancel button click redirect home", async () => {
    const cancelButton = screen.getByRole("button", { name: "취소" });

    await fireEvent.click(cancelButton);

    expect(window.location.pathname).toBe("/");
  });

  //API 통신 테스트 후 성공시 리다이렉트 동작 확인
  test("signupAPI request successful and redirect signin", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    const signupButton = screen.getByTestId("signup-button");

    mockedAxios.post.mockResolvedValueOnce({ status: 201 });

    await fireEvent.click(signupButton);

    await waitFor(() => {
      //로딩 컴포넌트가 정상적으로 뜨는지 이후 리다이렉트 하여url이 변경됐는지 확인
      const loadingComponent = screen.getByTestId("loading");
      expect(loadingComponent).toBeInTheDocument();
      expect(window.location.pathname).toBe("/singin");
    });
  });
});

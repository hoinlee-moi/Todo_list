import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("<Home />", () => {
  // 각 테스트가 시작 전 렌더링 하기
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  //홈페이지 타이틀 메세지가 잘 뜨는지 확인
  test("render home title massage", () => {
    const HomeTitleMessage = screen.getByRole("h1", {
      name: "TODOLIST에 오신 걸 환영합니다!",
    });
    expect(HomeTitleMessage).toBeInTheDocument();
  });

  //Login 버튼 누를시 signin페이지 이동
  test("click login button redirect /signin", () => {
    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/signin");
  });

  //signup버튼 누를시 signup페이지 이동
  test("click signup button redirect /signup", () => {
    const signupButton = screen.getByRole("button", { name: "회원가입" });
    fireEvent.click(signupButton);
    expect(window.location.pathname).toBe("signup");
  });
});


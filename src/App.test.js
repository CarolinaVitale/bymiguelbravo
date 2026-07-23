import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders the primary home experience", () => {
  window.history.pushState({}, "", "/");
  render(<App />);
  expect(screen.getByRole("heading", { name: /a table worth remembering/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /plan your experience/i })).toBeInTheDocument();
});

test("renders a recoverable not-found page", () => {
  window.history.pushState({}, "", "/missing-page");
  render(<App />);
  expect(screen.getByRole("heading", { name: /this table isn.t set/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /return home/i })).toBeInTheDocument();
});

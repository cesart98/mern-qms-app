import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from '../App.js';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
}

describe("App component", () => {
  describe("Home page", () => {
    const { getByRole } = renderWithRouter(<App />, { route: '/home' });
    it.todo("should appear at /home path");
    it("should render Home component", () => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  })
  describe("Inventory page", () => {
    it.todo("should appear at /inventory path");
    it.todo("should render Inventory component");
  })
  describe("Signup page", () => {
    it.todo("should appear at /signup path");
    it.todo("should render SignUp component");
  })
  describe("Login page", () => {
    it.todo("should appear at /login path");
    it.todo("should render Login component");
  })
  describe("Invalid page", () => {
    it.todo("should render PageNotFound");
  })
})
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from '..//App.js';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

describe("App component", () => {
  describe("Home page", () => {
    it.todo("should render Home component");
  })
  describe("Inventory page", () => {
    it.todo("should render Inventory component");
  })
  describe("Signup page", () => {
    it.todo("should render SignUp component");
  })
  describe("Login page", () => {
    it.todo("should render Login component");
  })
  describe("Invalid page", () => {
    it.todo("should render PageNotFound");
  })
})
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import App from '../App.js';
import {BrowserRouter} from 'react-router-dom'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return { ...render(ui, { wrapper: BrowserRouter }) }
}

describe("App component", () => {
  it('should render home page', () => {
    renderWithRouter(<App/>, { route: '/home' });
    expect(location.pathname).toEqual('/home');
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  })
  it('should render inventory page', () => {
    renderWithRouter(<App/>, { route: '/inventory' });
    expect(location.pathname).toEqual('/inventory');
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  })
  it('should render login page', () => {
    renderWithRouter(<App/>, { route: '/login' });
    expect(location.pathname).toEqual('/login');
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  })
  it.todo('should render page not found');
})
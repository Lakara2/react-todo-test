import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Counter } from "../components/Counter";

test("+ 1 on click", () => {
  render(<Counter/>);
  const button = screen.getByText("Add");
  fireEvent.click(button);
  const h1 = screen.getByTestId("bryan");
  expect (parseInt(h1.textContent+"")).toBe(1);
})
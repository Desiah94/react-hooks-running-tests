import "@testing-library/jest-dom";
// importing from the Jest library//
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  screen.debug();
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
//screen is the object.//
//queryByText means to find the part of the webpage that contains the specific text//
//toBeInTheDocument helps us to say the specific element resides in that specific spot.//

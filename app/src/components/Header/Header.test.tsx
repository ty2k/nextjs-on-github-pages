import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("Header contains a <header> tag", async () => {
  render(<Header />);
  expect(screen.getByText("Header component"));
});

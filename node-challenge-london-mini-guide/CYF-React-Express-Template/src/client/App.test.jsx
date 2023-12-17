import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders a title", () => {
    //arrange
    render(<App />);
    //act
    //assert
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite React Express CYF"
    );
  });
});

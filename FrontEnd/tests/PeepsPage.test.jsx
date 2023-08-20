import { render, screen } from "@testing-library/react";
import PeepsPage from "../src/Components/PeepsPage.jsx";
import { describe, test, expect } from "vitest";
import mockData from "./testData/peepsMockData.js";
import "./setup.js";

describe("PeepsPage component tests", () => {
  test("it should show the correct number of peeps based on the array supplied", () => {
    const fakePeepsLength = mockData.peeps.length;
    render(<PeepsPage dataArray={mockData.peeps} userData={{}} />);
    expect(screen.getByText("Baby Yoda is me.").toBeInTheDocument);
    expect(
      screen.getByText(
        "You know who I am... your friendly neighborhood Spiderman!"
      ).toBeInTheDocument
    );
    expect(screen.getByText("I don't know who I am!").toBeInTheDocument);
  });
});

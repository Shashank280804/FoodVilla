import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import {render, screen, fireEvent} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";

//mock fetch function
global.fetch = jest.fn(() => {
    //fetch returns Promise
    return Promise.resolve({
        //json returns Promise
        json:() => {
            return Promise.resolve(MOCK_DATA)
        },
    });
});

it("Should Search Restaurant List for pizza text input", async () => {
    await act( async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(9);
    
    //Search button
    const searchBtn = screen.getByRole("button", { name: "Search" });
    
    //Search Input
    const searchInput = screen.getByTestId("searchInput");
    
    //Search input change event
    fireEvent.change(searchInput, { target: { value: "domino" } });
    
    //Search btn click event
    fireEvent.click(searchBtn);
    
    //After search records
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(5);
  });
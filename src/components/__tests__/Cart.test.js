import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "../../utils/redux/appStore";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA_NAME)
    })
);

it("Should load Restaurant Menu's Beverages (9) when it's clicked", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
    
    //when we click on Beverages (9) accordian in the McDonald's Restaurant menu
    const accordianHeader  = screen.getByText("Beverages (9)");
    fireEvent.click(accordianHeader);
    
    //getting foodItems from McDonald's
    const footItems = screen.getAllByTestId("foodItems");
    
    //Assertion
    expect(footItems.length).toBe(9);
});

it("Should load Restaurant Menu Cart : 0 initially", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
    
    //no cart items
    const noCartItems = screen.getByText("Cart : 0");
    
    //Assertion
    expect(noCartItems).toBeInTheDocument();
});

it("Should add one item to cart through first ADD button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
    
    //add items btn
    const addBtn = screen.getAllByRole("button", {name : "ADD"});
    
    //there are several ADD btn but clicking on first btn
    fireEvent.click(addBtn[1]);

    const oneCartItem = screen.getByText("Cart : 1");
    
    //Assertion
    expect(oneCartItem).toBeInTheDocument();
});

it("Should add two items to cart through second ADD button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );

    //add items btn
    const addBtn = screen.getAllByRole("button", {name : "ADD"});

    //there are several ADD btn but clicking on second btn
    fireEvent.click(addBtn[2]);

    const oneCartItem = screen.getByText("Cart : 2");
    
    //Assertion
    expect(oneCartItem).toBeInTheDocument();
});


it("Should check two added items are in the cart component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
   
    //all foodItems after 2 items added to cart
    const allFoodItems = screen.getAllByTestId("foodItems");

    //assertion
    expect(allFoodItems.length).toBe(22);
});

it("Should clear cart", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    );
   
    //all foodItems removing items added to cart
    const allFoodItems = screen.getAllByTestId("foodItems");

    //clear cart btn
    const clearCart =  screen.getByRole("button", {name : "Clear Cart"});
    
    //clear cart btn click
    fireEvent.click(clearCart);

    const clearCartText = screen.getByText("Your cart is empty. You can go to home page to view more restaurants.");
    
    //checking text
    expect(clearCartText);

    //assertion - all foodItems after removing cart items
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
});
import {fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";

{/*
    1) testing can't be done for router because it's another library 'react-router-dom', 
    to avoid error regarding Link, we need to wrap withing BrowserRouter

    2) testing can't be done for redux because it's another library 'react-redux', 
    to avoid error regarding redux, we need to wrap withing Provider
    appStore - comes from utils folder

    3) testing in Header component
*/}
it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    //should apply exact text "Cart : 0" 
    const cartItems = screen.getByText("Cart : 0");

    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    //should apply exact text /Cart/ which is a regx
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button", {name:"Login"});
    
    //When click on Login button changed to Logout
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});

it("Should check online", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    const onlineStatus = screen.getByText("🟢");    
    expect(onlineStatus).toBeInTheDocument();
});


it("Should show Logout button when Login button is simulated", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    
    const loginBtn = screen.getByRole("button", {name : "Login"});
    
    // Simulate a click event on the login button
    fireEvent.click(loginBtn);
    
    // Assert that the button text has changed to "Logout"
    expect(loginBtn.textContent).toBe("Logout");
});

// it("Should show Login button when Logout button is simulated", () => {
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header/>
//             </Provider>
//         </BrowserRouter>
//     )
    
//     const logoutBtn = screen.getByRole("button", {name : "Logout"});
    
//     // Simulate a click event on the logout button
//     fireEvent.click(logoutBtn);
    
//     // Assert that the button text has changed to "Login"
//     expect(logoutBtn.textContent).toBe("Login");
// });
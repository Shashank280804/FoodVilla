import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";
import '@testing-library/jest-dom';

//test takes 2 params => description, callback function
//describe - We can group the test cases
describe("Contact Us Page Test Case", () => {
    //Test case:1 => Heading there or not
    it("Should load contact us component", () => {
        //rendering the contacts component in jsdom
        render(<Contacts/>);

        //trying to find heading inside the contact screen
        const heading = screen.getByRole("heading");

        //assertion - expecting heading inside the contacts document
        expect(heading).toBeInTheDocument();
    });

    //Test case:2 => button exists or not
    it("Should load button inside the Contact component", () => {
        render(<Contacts/>);

        const button = screen.getByRole("button");

        //Assertion
        expect(button).toBeInTheDocument();
    });

    //Test case:3 => whether there's placeholder named "Name"
    describe("Should load placeholders", () => {
        it("Should load placeholder named 'Name' inside the Contact component", () => {
            render(<Contacts/>);
    
            const placeholderName = screen.getByPlaceholderText("Name");
    
            //Assertion
            expect(placeholderName).toBeInTheDocument();
        });
    
        //Test case:4 => whether there's placeholder named "Message"
        it("Should load placeholder named 'Message' inside the Contact component", () => {
            render(<Contacts/>);
    
            const placeholderMsg = screen.getByPlaceholderText("Message");
    
            //Assertion
            expect(placeholderMsg).toBeInTheDocument();
        });
    })

    //Test case:5 => whether there's an input field or not
    it("Should load 2 input fields inside the Contact component", () => {
        render(<Contacts/>);

        //Querying
        const inputBoxes = screen.getAllByRole("textbox");

        //Assertion
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);//not expecting it to be 3
    });
});
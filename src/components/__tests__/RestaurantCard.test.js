import RestaurantCard, {withPromotedLabel}  from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMockData.json"; 
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
    //passing mockData(dummy) data to RestaurantCard
    render(<RestaurantCard resData={MOCK_DATA}/>)

    //checking with mockData restaurant name
    const resName = screen.getByText("Domino's Pizza");

    expect(resName).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);//Higher Order Component
    
    //render the Higher Order Component
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    //checking with mockData restaurant name
    const resName = screen.getByText("Domino's Pizza");

    expect(resName).toBeInTheDocument();
});
import Card from "../card";
import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react'
import data from '../../../mockData/index.json'


describe("Card", () => {
    it("should render correctly", () => {
        const { asFragment } = render(<Card item={data[0]}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should increase clap count', () => {
        render(<Card item={data[0]}/>);
        const clap = screen.queryByTestId('clap');
        const clapIcon = screen.queryByTestId('clapIcon');
        expect(clap).toHaveTextContent('0');
        fireEvent.click(clapIcon);
        expect(clap).toHaveTextContent('1');
    })
    it('should change like', () => {
        render(<Card item={data[0]}/>);
        expect(screen.queryByAltText('heartIcon').src).toEqual('http://localhost/heart-black.svg');
    fireEvent.click(screen.queryByAltText('heartIcon'));
    expect(screen.queryByAltText('heartIcon').src).toEqual('http://localhost/heart-red.svg');
    })
});

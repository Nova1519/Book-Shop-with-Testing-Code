import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';


describe("Index",()=>{
    it("Should render", ()=>{
        render (<Index />);
        const products = screen.getAllByDisplayValue("products");
        expect(products).not.toBeInTheDocument();
    });
});

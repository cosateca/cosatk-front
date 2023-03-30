import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Footer from '../src/components/Footer/Footer'
import React from 'react'

let p:any;

describe('Footer', ()=>{
    beforeEach(()=>{
        render(<Footer />)
        p = screen.getByText(/Copyright © 2023/i);
        p = screen.getByText(/08773 - St. Joan De Mediona - cosatk@gmail.com/i);
    })
    it('render appropritoateley', ()=>{
        expect(p).toBeInTheDocument()
    })
    it('render appropritoateley', ()=>{
        expect(p).toBeInTheDocument()
    })
    
})
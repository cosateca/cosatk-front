import { screen, render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../src/context/AuthProvider";
import CataloguePage from '../src/pages/CataloguePage/CataloguePage'
import {  useEffect } from 'react'




let Typography:any;
let ListItemButton:any
let Product:any
// jest.mock('../src/pages/CataloguePage/CataloguePage')

const mockCataloguePage = [
 
 {IdArticle:0, name:''}
]
// Cardproduct: jest.fn().mockImplementation(()=>CataloguePage)

describe('CatalogePage', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
        <AuthProvider>
         <CataloguePage />
        </AuthProvider>
        </BrowserRouter>

        )
        Typography = screen.getByText(/Catàleg/i)
        // Product = screen.getAllByTestId('CardProduct')
            
        
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeTruthy()
    })
    it('should return the description of all items', ()=>{
        // expect(Product).toBeTruthy()
    })

})
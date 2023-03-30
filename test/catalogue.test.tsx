import { screen, render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import CataloguePage from '../src/pages/CataloguePage/CataloguePage'



let Typography:any;
let ListItemButton:any
let Product:any

describe('CatalogePage', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
         <CataloguePage />
        </BrowserRouter>
        )
        // Typography = screen.getByText(/Catàleg/i)
        // Product = screen.getByAltText(CardProduct)
        
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeTruthy()
    })

})
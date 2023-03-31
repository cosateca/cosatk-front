import { screen, render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import HomePage from '../src/pages/HomePage/HomePage'



let Typography:any;
let ListItemButton:any

describe('HomePage', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
         <HomePage />
        </BrowserRouter>
        )
        Typography = screen.getByText(/Articles populars/i)
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeTruthy()
    })

})
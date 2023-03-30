import { screen, render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Registe from '../src/pages/Register/Register'



let Typography:any;
let ListItemButton:any

describe('LoginPage', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
         <Registe />
        </BrowserRouter>
        )
        Typography = screen.getByText(/Registre/i)
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeTruthy()
    })

})
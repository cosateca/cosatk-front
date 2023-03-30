import { screen, render } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Login from '../src/pages/LoginPage/LoginPage'



let Typography:any;
let ListItemButton:any

describe('LoginPage', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
         <Login />
        </BrowserRouter>
        )
        Typography = screen.getByText(/Benvingut/i)
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeTruthy()
    })

})
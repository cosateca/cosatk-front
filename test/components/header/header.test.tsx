import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Header from '../../../src/components/Header/Header'
import Loans from '../../../src/pages/Dashboard/Loans/Loans'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event'


let Typography:any;
let Button:any;
describe('NavBar', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
        )
        Typography = screen.getByText(/Accedeix/i)
        Button = screen.getByRole('button', {name:'Accedeix'});
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeInTheDocument()
    })
    it('It should show the loan screen when the loan button is clicked', async ()=>{
      render( 
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loans />} />
            </Routes> 
            </BrowserRouter>
        )
        // console.log(screen.getAllByText(''))
        await userEvent.click(screen.getByRole('button', {name:'Accedeix'}));
        screen.debug()
        expect(Button).toBeInTheDocument()
    })
    it('It should not show the loan screen, when the article is clicked', async ()=>{
        render( 
              <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Loans />} />
              </Routes> 
              </BrowserRouter>
          )
          // console.log(screen.getAllByText(''))
          await userEvent.click(screen.getAllByText('Articles')[0]);
          screen.debug()
          expect(screen.queryByText(/PRÈSTECS/)).not.toBeInTheDocument()
          // await screen.findByText('ssss')
      })
})
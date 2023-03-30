import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Header from '../src/components/Header/Header'
import Loans from '../src/pages/Dashboard/Loans/Loans'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { AuthProvider } from "../src/context/AuthProvider";


let Typography:any;
let Button:any;
describe('NavBar', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
         <AuthProvider>
            <Header/>
            </AuthProvider>
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
             <AuthProvider>
            <Routes>
                <Route path="/" element={<Loans />} />
            </Routes> 
            </AuthProvider>
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
              <AuthProvider>
              <Routes>
                  <Route path="/dashboard/loans" element={<Loans />} />
              </Routes> 
              </AuthProvider>
              </BrowserRouter>
          )
          console.log(screen.getAllByText(''))

          await userEvent.click(screen.getAllByText('Accedeix')[0]);
          screen.debug()
          expect(screen.queryByText(/PRÈSTECS/)).not.toBeTruthy()

          
          // await screen.findByText('ssss')
      })
    })

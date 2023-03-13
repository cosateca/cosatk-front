import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import NavBar from '../../../src/components/Navbar/Navbar'
import Loans from '../../../src/pages/Dashboard/Loans/Loans'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import App from '../../../src/App'

let Typography:any;
describe('NavBar', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
        <NavBar/>
        </BrowserRouter>
        )
        Typography = screen.getByText(/TANCAR SESSIÓ/i)
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeInTheDocument()
    })
    it('Debet mostra la pantalla de prestamo cuando se clcik el boton de prestamo', async ()=>{
      render( 
            <BrowserRouter>
            <Routes>
                {/* <Link to='/dashboard/loans'>
                </Link> */}
                <Route path="/" element={<Loans />} />
            </Routes> 
            </BrowserRouter>
        )
        // console.log(screen.getAllByText(''))
        await userEvent.click(screen.getAllByText('Prèstecs')[0]);
        screen.debug()
        expect(screen.getByText(/PRÈSTECS/)).toBeInTheDocument()
        // await screen.findByText('ssss')
    })
    it('no debe mostrar la pantalla de prestamo , cuando se click article', async ()=>{
        render( 
              <BrowserRouter>
              <Routes>
                  {/* <Link to='/dashboard/loans'>
                  </Link> */}
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
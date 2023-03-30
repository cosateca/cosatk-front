import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import NavBar from '../src/components/Navbar/Navbar'
import Loans from '../src/pages/Dashboard/Loans/Loans'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { AuthProvider } from "../src/context/AuthProvider";


let Typography:any;
let ListItemButton:any

describe('NavBar', ()=>{
    beforeEach(()=>{
        render(
        <BrowserRouter>
        <AuthProvider>

        <NavBar/>
        </AuthProvider>

        </BrowserRouter>
        )
        Typography = screen.getByText(/TANCAR SESSIÓ/i)
    })
    it('render appropritoateley', ()=>{
        expect(Typography).toBeInTheDocument()
    })










    // it('It should show the loan screen when the loan button is clicked', async ()=>{
    //   render( 
    //         <BrowserRouter>
    //         <Routes>
    //             {/* <Link to='/dashboard/loans'>
    //             </Link> */}
    //             <Route path="/" element={<Loans />} />
    //         </Routes> 
    //         </BrowserRouter>
    //     )
    //     // console.log(screen.getAllByText(''))
    //     await userEvent.click(screen.getAllByText('Prèstecs')[0]);
    //     screen.debug()
    //     expect(screen.getByText(/PRÈSTECS/)).toBeInTheDocument()
    //     // await screen.findByText('ssss')
    // })
    // it('It should not show the loan screen, when the article is clicked', async ()=>{
    //     render( 
    //           <BrowserRouter>
    //           <Routes>
    //               {/* <Link to='/dashboard/loans'>
    //               </Link> */}
    //               <Route path="/" element={<Loans />} />
    //           </Routes> 
    //           </BrowserRouter>
    //       )
    //       // console.log(screen.getAllByText(''))

    //     //   await userEvent.click(screen.getAllByText('Articles')[0]);
    //     //   screen.debug()

    //       expect(screen.queryByText(/PRÈSTECS/)).not.toBeInTheDocument()
    //       // await screen.findByText('ssss')
    //   })

})
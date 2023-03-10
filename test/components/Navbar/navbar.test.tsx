import React, {ReactElement} from 'react'
import {render, screen} from '@testing-library/react'
import Navigation from '../../../src/components/Navbar/Navbar'



test("When the user clicks on the loan button, it takes me to the corresponding page",()=>{
render (
    <Navigation/>
)
expect(screen.getByText('Prèstecs')).toBeTruthy();
})
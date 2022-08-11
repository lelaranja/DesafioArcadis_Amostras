import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import List from '../components/pointList'


const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/ponto' element={<List />} />
                <Route path='/ponto/irregular' element={<List />} />
                <Route path='/ponto' element={<List />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
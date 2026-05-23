import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './componants/Navbar'

const Root = () => {
    return (
        <div className='allpage'>
            <Navbar/>
            <Outlet />
            {/* <footer>footer</footer> */}
            

        </div>
    )
}

export default Root
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'
import '../template/custom.css'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)
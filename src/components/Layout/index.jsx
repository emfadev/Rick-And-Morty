import React from 'react'
import { Header } from '../Header'

export const Layout = (props) => {
    console.log(props)
    const isLogin = true
    return (
        <div>
            <Header isLogin={isLogin} />
            {props.children}
            Footer
        </div>
    )
}

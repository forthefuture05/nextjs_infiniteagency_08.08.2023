import React from 'react'
import Nav from './big/Navigation/Nav'
import Footer from './big/Footer/Footer'

const Main = props => {
    return (
        <>
            <Nav />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Main
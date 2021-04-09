import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Form from '../Components/Form'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>
            <main className="mainblock">
                <Nav/>
                <Landing />
            </main>
            <Form />
            <Footer />
        </div>
    )
}

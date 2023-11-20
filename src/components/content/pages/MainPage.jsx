import React from 'react'
import Navbar from '../navbar/Navbar'
import ShowEtkinlik from './ShowEtkinlik'
import Carousel from './Carousel'
import Footer from './Footer'

function MainPage() {
    return (<>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Carousel />
            </div>
            <ShowEtkinlik />
        </div>
        <Footer />
    </>)
}

export default MainPage
import React from 'react'
import Navbar from '../navbar/Navbar'
import ShowEtkinlik from './ShowEtkinlik'
import Carousel from './Carousel'

function MainPage() {
    return (<>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Carousel />
            </div>
            <ShowEtkinlik
                img="https://cdn.bubilet.com.tr/files/Etkinlik/ajda-pekkan--48333.jpg"
                title="Ajda Pekkan"
                description="Congresium Ankara 22 Aralık Cuma - 21.00"
            />
        </div>

    </>)
}

export default MainPage
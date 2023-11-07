import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';

// function Content(props) {
//     return (
//       <div className='card'>
//         <div className='cardBody'>
//             <img src= {props.img} />
//             <div className="abuot">
//                 <h2 className='cardTitle'>{props.title}</h2>
//                 <p className='cardDescription'>{props. description}</p>
//             </div>
//             <button>Detayları görüntüle</button>
//         </div>
//       </div>
//     )
// }

// export default Content

function ShowEtkinlik() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://51.20.118.182/api/v1/etkinlik/list')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    return (
        <div>
            <h1>Etkinlik Listesi</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h2>{event.aciklama}</h2>
                        <p>Konum: {event.konumAdi}</p>
                        <p>Adres: {event.adres}</p>
                        <p>Tür: {event.etkinlikType}</p>
                        <p>Başlangıç: {event.etkinlikBaslangic}</p>
                        <p>Bitiş: {event.etkinlikBitis}</p>
                        <h3>Ücretler:</h3>
                        <ul>
                            {event.etkinlikUcretleri.map(ucret => (
                                <li key={ucret.id}>{ucret.kategoriType}: {ucret.fiyat} TL</li>
                            ))}
                        </ul>
                        <h3>Resimler:</h3>
                        <ul>
                            {event.etkinlikResimleri.map(resim => (
                                <li key={resim.id}>{resim.resimAd}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowEtkinlik;
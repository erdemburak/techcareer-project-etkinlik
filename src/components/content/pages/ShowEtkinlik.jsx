// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './card.css';
// import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

// function ShowEtkinlik() {
//     const [events, setEvents] = useState([]);
//     const [selectedDate, setSelectedDate] = useState('');

//     useEffect(() => {
//         axios.get('http://51.20.118.182/api/v1/etkinlik/list')
//             .then((response) => {
//                 setEvents(response.data);
//             })
//             .catch((error) => {
//                 console.error('Veri çekme hatası:', error);
//             });
//     }, []);

//     const filteredEvents = events.filter(event => {
//         if (selectedDate) {
//             const startDate = new Date(selectedDate);
//             const endDate = new Date(selectedDate);
//             endDate.setDate(endDate.getDate() + 1); 

//             return (
//                 new Date(event.etkinlikBaslangic) >= startDate && new Date(event.etkinlikBitis) < endDate
//             );
//         }
//         return true; 
//     });

//     return (
//         <>
//             <div style={{ backgroundColor: '#F2F2F2', padding: '20px' }}>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
//                     <h1 style={{ color: '#336699' }}>Etkinlik Listesi</h1>
//                     <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
//                 </div>
//                 <hr />

//                 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//                     {filteredEvents.map(event => (
//                         <div key={event.id} style={{ width: '300px', margin: '16px' }}>
//                             <Card style={{ backgroundColor: 'white' }}>
//                                 <CardActionArea>
//                                     <CardMedia
//                                         component="img"
//                                         height="200"
//                                         image={event.gorselUrl}
//                                         title={event.aciklama}
//                                         style={{ borderRadius: "4%" }}
//                                     />
//                                     <CardContent>
//                                         <Typography variant="h6" gutterBottom>
//                                             {event.aciklama}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Konum: {event.konumAdi}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Adres: {event.adres}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Tür: {event.etkinlikType}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Başlangıç: {event.etkinlikBaslangic}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Bitiş: {event.etkinlikBitis}
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                             </Card>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ShowEtkinlik;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function ShowEtkinlik() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://51.20.118.182/api/v1/etkinlik/list')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    const filteredEvents = events.filter(event => {
        if (selectedDate) {
            const startDate = new Date(selectedDate);
            const endDate = new Date(selectedDate);
            endDate.setDate(endDate.getDate() + 1);

            return (
                new Date(event.etkinlikBaslangic) >= startDate &&
                new Date(event.etkinlikBitis) < endDate
            );
        }

        if (searchTerm) {
            return (
                (event.aciklama && event.aciklama.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (event.yapanGrup && event.yapanGrup.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (event.yapanKisi && event.yapanKisi.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        return true;
    });

    const konumaGoreListe = () => {
        console.log("deneme")

    }

    return (
        <>
            <div style={{ backgroundColor: '#F2F2F2', padding: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                    <h1 style={{ color: '#336699' }}>Etkinlik Listesi</h1>
                    <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
                    <input type="text" placeholder="Etkinlik veya Grup Ara" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <hr />

                {/* Etkinlik Kartları */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredEvents.map(event => (
                        <div key={event.id} style={{ width: '300px', margin: '16px' }}>
                            {/* Kart Detayları */}
                            <Card style={{ backgroundColor: 'white' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={event.gorselUrl}
                                        title={event.aciklama}
                                        style={{ borderRadius: "4%" }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {event.aciklama}
                                        </Typography>
                                        <Typography onClick={() => konumaGoreListe()} variant="body2" color="textSecondary">
                                            Konum: {event.konumAdi}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Adres: {event.adres}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Tür: {event.etkinlikType}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Başlangıç: {event.etkinlikBaslangic}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Bitiş: {event.etkinlikBitis}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ShowEtkinlik;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Etkinlik.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

function EskiEtkinlikler() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://51.20.142.51/api/v1/etkinlik/list')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    // Filter events that occurred before the current date
    const currentDate = new Date();

    const filteredEvents = events.filter(event => {
        return new Date(event.etkinlikBitis) < currentDate;
    });

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: 'rgba(242, 242, 242, 0.5)', padding: '20px', margin: '5%', minHeight: '55vh', borderRadius: '10px', boxShadow: '0 0 10px #000' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                    <h2 style={{ color: '#fff' }}>Tarihi Geçmiş Etkinlikler</h2>
                </div>
                <hr />

                {/* Eski Etkinlik Kartları */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredEvents.map(event => (
                        <div key={event.id} style={{ width: '300px', margin: '16px' }}>
                            {/* Kart Detayları */}
                            <Card style={{ backgroundColor: '#DED2D2', borderRadius: '10px', boxShadow: '0 0 10px #DED2D2' }}>
                                <CardActionArea>
                                    <Link to={`/etkinlik/${event.id}`} style={{ textDecoration: 'none' }}>
                                        <CardMedia
                                            component="img"
                                            src={event.etkinlikResimleri[0].resimAd}
                                            title={event.aciklama}
                                            className='custom-card-media'
                                        />
                                    </Link>
                                    <CardContent style={{ height: '173px' }}>
                                        <Typography variant="h6" gutterBottom>
                                            {event.ad}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Konum: {event.konumAdi}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Tür: {event.etkinlikType}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Başlangıç: {moment(event.etkinlikBaslangic).format('DD/MM/YYYY HH:mm')}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Bitiş: {moment(event.etkinlikBitis).format('DD/MM/YYYY HH:mm')}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EskiEtkinlikler;

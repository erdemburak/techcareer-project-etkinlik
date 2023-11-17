import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
                event.aciklama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.yapanGrup.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.yapanKisi.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return new Date(event.etkinlikBitis) >= new Date();
    });
    const konumaGoreListe = (konum) => {
        var konumaGoreEtkinlik = events.filter(q => q.konumAdi === konum)

        setEvents(konumaGoreEtkinlik);
    }

    return (
        <>
            <div style={{ backgroundColor: '#F2F2F2', padding: '20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                    <h1 style={{ color: '#336699' }}>Etkinlik Listesi</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '330px' }}>
                        <input type="text" placeholder="Etkinlik veya Grup Ara" onChange={(e) => setSearchTerm(e.target.value)} style={{ border: 0, borderRadius: '5%' }} />
                        <input type="date" onChange={(e) => setSelectedDate(e.target.value)} style={{ border: 0, borderRadius: '5%' }} />
                    </div>
                </div>
                <hr />

                {/* Etkinlik Kartları */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {filteredEvents.map(event => (
                        <div key={event.id} style={{ width: '300px', margin: '16px' }}>
                            {/* Kart Detayları */}
                            <Card style={{ backgroundColor: 'white' }}>
                                <CardActionArea>
                                    <Link to={`/etkinlik/${event.id}`} style={{ textDecoration: 'none' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            src={event.etkinlikResimleri[0].resimAd}
                                            title={event.aciklama}
                                            style={{ borderRadius: "4%" }}
                                        /> </Link>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {event.ad}
                                        </Typography>
                                        <Typography onClick={() => konumaGoreListe(event.konumAdi)} variant="body2" color="textSecondary">
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
        </>
    );
}

export default ShowEtkinlik;
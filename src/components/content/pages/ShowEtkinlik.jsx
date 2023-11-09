import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

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

    return (<>

        <div style={{ backgroundColor: '#F2F2F2', padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                <h1 style={{ color: '#336699' }}>Etkinlik Listesi</h1>
                <h1>Filter</h1>
            </div>
            <hr />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {events.map(event => (
                    <div key={event.id} style={{ width: '300px', margin: '16px' }}>
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
                                    <Typography variant="body2" color="textSecondary">
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
                                    {/* <Typography variant="body2">
                                        <strong>Ücretler:</strong>
                                    </Typography>
                                    <ul>
                                        {event.etkinlikUcretleri.map(ucret => (

                                            <li key={ucret.id}>{ucret.kategoriType}: {ucret.fiyat} TL</li>
                                        ))}
                                    </ul>
                                    <Typography variant="body2">
                                        <strong>Resimler:</strong>
                                    </Typography>
                                    <ul>
                                        {event.etkinlikResimleri.map(resim => (
                                            <li key={resim.id}>{resim.resimAd}</li>
                                        ))}
                                    </ul> */}
                                </CardContent>
                            </CardActionArea>
                            <CardActionArea style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button size="small" style={{ backgroundColor: '#F2F2F2' }}>Paylaş</Button>
                                <Button size="small" style={{ backgroundColor: '#F2F2F2' }}>Detay</Button>
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Etkinlik.css';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { addFavoriteEvent, removeFavoriteEvent } from '../favorite/favoriteEventsSlice'
import { useDispatch, useSelector } from 'react-redux';

function ShowEtkinlik() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const favoriteEvents = useSelector(state => state.favoriteEvents);

    useEffect(() => {
        axios.get('http://51.20.118.182/api/v1/etkinlik/list')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    const handleFavoriteClick = (eventId) => {
        // Check if the event is already in favorites
        const isFavorite = favoriteEvents.some(event => event.id === eventId);

        if (isFavorite) {
            // Remove from favorites
            dispatch(removeFavoriteEvent(eventId));
        } else {
            // Add to favorites
            // Assuming 'event' has all the necessary details needed for your favoriteEvents state
            dispatch(addFavoriteEvent(events.find(event => event.id === eventId)));
        }
    };

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
                (event.ad && event.ad.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (event.yapanGrup && event.yapanGrup.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (event.yapanKisi && event.yapanKisi.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <div className='showEtkinlik'>
        <div className="etkinlik-header">
            <h2>Etkinlik Listesi</h2>
            <div className="search-date-container">
                <input type="text" placeholder="Etkinlik veya Grup Ara" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
        </div>

        {/* Etkinlik Kartları */}
        <div className="etkinlik-card-container">
            {filteredEvents.map(event => (
                <div key={event.id} className="etkinlik-card">
                    {/* Kart Detayları */}
                    <Card className="custom-card">
                        <CardActionArea>
                            <Link to={`/etkinlik/${event.id}`} className="custom-link">
                                <CardMedia
                                    component="img"
                                    src={event.etkinlikResimleri[0].resimAd}
                                    title={event.aciklama}
                                    className="custom-card-media"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="h6" gutterBottom className="custom-card-title">
                                    {event.ad}
                                </Typography>
                                <Typography onClick={() => konumaGoreListe(event.konumAdi)} variant="body2" color="textSecondary" className="custom-location-text">
                                    Konum: {event.konumAdi}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="custom-type-text">
                                    Tür: {event.etkinlikType}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="custom-date-time-text">
                                    Başlangıç: {moment(event.etkinlikBaslangic).format('DD/MM/YYYY HH:mm')}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="custom-date-time-text">
                                    Bitiş: {moment(event.etkinlikBitis).format('DD/MM/YYYY HH:mm')}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <div className="custom-icon-container">
                            <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick(event.id)}>
                                <FavoriteIcon color={favoriteEvents.some((favEvent) => favEvent.id === event.id) ? 'secondary' : 'default'} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    </div>

        </>
    );
}

export default ShowEtkinlik;
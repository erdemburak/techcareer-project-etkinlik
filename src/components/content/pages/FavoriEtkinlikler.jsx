import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../navbar/Navbar';
import { removeFavoriteEvent } from '../favorite/favoriteEventsSlice';
import Footer from './Footer';

function FavoriEtkinlikler() {
    const dispatch = useDispatch();
    const favoriteEvents = useSelector(state => state.favoriteEvents);
    const handleRemoveFromFavorites = (eventId) => {
        // Dispatch the action to remove the event from favorites
        dispatch(removeFavoriteEvent(eventId));
    };

    return (<>
        <Navbar />
        <div style={{ backgroundColor: 'rgba(242, 242, 242, 0.5)', padding: '20px', margin: '5%', minHeight: '55vh', borderRadius: '10px', boxShadow: '0 0 10px #000' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingLeft: '3%', paddingRight: '3%' }}>
                <h2 style={{ color: '#fff' }}>Favori Etkinlikler</h2>
            </div>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {favoriteEvents.map(event => (
                    <div key={event.id} style={{ width: '300px', margin: '16px' }}>
                        {/* Kart Detayları */}
                        <Card style={{ backgroundColor: '#DED2D2', borderRadius: '10px', boxShadow: '0 0 10px #fff' }}>
                            <CardActionArea>
                                <Link to={`/etkinlik/${event.id}`} style={{ textDecoration: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        src={event.etkinlikResimleri[0].resimAd}
                                        title={event.aciklama}
                                        style={{ borderRadius: "4%" }}
                                    /> </Link>
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
                            <IconButton aria-label="add to favorites" onClick={() => handleRemoveFromFavorites(event.id)}>
                                <FavoriteIcon color={favoriteEvents.some(favEvent => favEvent.id === event.id) ? 'secondary' : 'default'} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>

                        </Card>
                    </div>
                ))}
            </div>
        </div >
        <Footer />
    </>);
}

export default FavoriEtkinlikler;
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import moment from 'moment';

function FavoriEtkinlikler() {
    const favoriteEvents = useSelector(state => state.favoriteEvents);


    return (<>
        <div>
            <h2>Favori Etkinlikler</h2>
            {favoriteEvents.map(event => (
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
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon color={favoriteEvents.some(favEvent => favEvent.id === event.id) ? 'secondary' : 'default'} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                    </Card>
                </div>
            ))}
        </div>
    </>);
}

export default FavoriEtkinlikler;
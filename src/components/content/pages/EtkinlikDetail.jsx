import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@emotion/react';
import moment from 'moment/moment';
import SocialMediaButtons from './SocialMediaButtons' 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function EtkinlikDetail() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const { id } = useParams();
    const [etkinlik, setEtkinlik] = useState(null);

    useEffect(() => {
        axios.get(`http://51.20.118.182/api/v1/etkinlik/find/${id}`)
            .then((response) => {
                setEtkinlik(response.data);
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
            });
    }, [id]);

    if (!etkinlik) {
        return <div>Loading...</div>;
    }

    const images = etkinlik.etkinlikResimleri.map((resim, index) => ({
        label: `banner-${index + 1}`,
        imgPath: resim.resimAd,
    }));

    return (<>
        <Navbar />
        <div style={{ backgroundColor: '#F2F2F2', padding: '20px', margin: '5%' }}>
            <h2 style={{ color: '#336699' }}>Etkinlik Detayları</h2>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '60px', marginRight: '60px' }}>
                <div style={{ width: '50%' }} >
                    <Box sx={{ width: '300px', objectFit: 'cover', flexGrow: 1, }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img
                                            src={step.imgPath}
                                            alt={step.label}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                    </Box></div>
                <div style={{ width: '50%' }}>
                    <h2>{etkinlik.ad}</h2>
                    <p>Konum: {etkinlik.konumAdi}</p>
                    <p>Adres: {etkinlik.adres}</p>
                    <p>Tür: {etkinlik.etkinlikType}</p>
                    <p>Başlangıç: {moment(etkinlik.etkinlikBaslangic).format('DD/MM/YYYY HH:mm')}</p>
                    <p>Bitiş: {moment(etkinlik.etkinlikBitis).format('DD/MM/YYYY HH:mm')}</p>
                    <SocialMediaButtons
                    url={`http://localhost:3000/etkinlik/${id}`}
                    title={etkinlik.aciklama}
                    description={`Etkinlik: ${etkinlik.aciklama}, Konum: ${etkinlik.konumAdi}`}
                    image={images[0].imgPath}
                    />
          


                    <div style={{ display: 'flex' }}>
                        <div style={{ marginTop: '10px', marginRight: '10px' }}>
                            <img src="https://ckm.kadikoy.bel.tr/Uploads/Image/images/b_salon_oturma.jpg" alt="price" style={{ width: '150px', height: '150px' }} />
                        </div>
                        <table className='w3-table w3-striped w3-bordered w3-hoverable'>
                            <thead>
                                <tr>
                                    <th>Kategori</th>
                                    <th>Ücret</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    etkinlik.etkinlikUcretleri && etkinlik.etkinlikUcretleri.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>Kategori {index + 1}</td>
                                                <td>{item.fiyat}</td>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <hr />
            <div>
                Açıklama: {etkinlik.aciklama}
            </div>
            <hr />
            <div>
                Map
            </div>
        </div>
    </>

    );
}

export default EtkinlikDetail;
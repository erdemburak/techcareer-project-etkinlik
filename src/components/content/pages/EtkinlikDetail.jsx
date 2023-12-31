import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@emotion/react';
import moment from 'moment/moment';
import './Etkinlik.css';  // Yeni eklediğimiz stil dosyasını import ettik
import Footer from './Footer';
import SharePopup from './SharePopup';

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
    axios
      .get(`http://51.20.142.51/api/v1/etkinlik/find/${id}`)
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

  return (
    <>
      <Navbar />
      <div className="etkinlik-detail-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
          <h2>Etkinlik Detayları</h2>
          <div className="share-icons">
            <SharePopup event={etkinlik} />
          </div>
        </div>
        <hr />

        <div className="flex-container">
          <div className="image-container">
            <Box sx={{ width: '300px', objectFit: 'cover', flexGrow: 1 }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img src={step.imgPath} alt={step.label} className="image" />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
          </div>

          <div className="info-container">
            <h2>{etkinlik.ad}</h2>
            <p style={{ fontSize: '18px' }}>{etkinlik.konumAdi}</p>
            <p>Adres: {etkinlik.adres}</p>
            <p>{etkinlik.etkinlikType}</p>
            <p>Başlangıç: {moment(etkinlik.etkinlikBaslangic).format('DD/MM/YYYY HH:mm')}</p>
            <p>Bitiş: {moment(etkinlik.etkinlikBitis).format('DD/MM/YYYY HH:mm')}</p>



            <div style={{ display: 'flex', width: '300px' }}>
              <table className="w3-table  w3-bordered w3-hoverable" style={{ border: '1px solid', padding: '10px' }}>
                <thead>
                  <tr>
                    <th>Kategori</th>
                    <th>Ücret</th>
                  </tr>
                </thead>
                <tbody>
                  {etkinlik.etkinlikUcretleri &&
                    etkinlik.etkinlikUcretleri.map((item, index) => (
                      <tr key={item.id}>
                        <td>Kategori {index + 1}</td>
                        <td>{item.fiyat} ₺</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr />
        <div style={{ padding: '10px' }}>
          <span style={{ fontSize: '20px' }}>Etkinlik Detayı</span>
          <p>{etkinlik.aciklama}</p>
        </div>
        <hr />
        <div style={{ padding: '10px' }}>Map</div>
      </div>
      <Footer />
    </>
  );
}

export default EtkinlikDetail;
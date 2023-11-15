import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function EtkinlikDetail() {
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

    return (<>
        <Navbar />
        <div style={{ backgroundColor: '#F2F2F2', padding: '20px' }}>
            <h1 style={{ color: '#336699' }}>Etkinlik Detayları</h1>
            <hr />
            <div>
                <h2>{etkinlik.aciklama}</h2>
                <p>Konum: {etkinlik.konumAdi}</p>
                <p>Adres: {etkinlik.adres}</p>
                <p>Tür: {etkinlik.etkinlikType}</p>
                <p>Başlangıç: {etkinlik.etkinlikBaslangic}</p>
                <p>Bitiş: {etkinlik.etkinlikBitis}</p>
                {/* Diğer detaylar */}
            </div>
        </div>
    </>

    );
}

export default EtkinlikDetail;

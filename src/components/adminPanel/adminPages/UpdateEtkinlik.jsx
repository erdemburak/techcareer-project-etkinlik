import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const UpdateEtkinlik = ({ eventId }) => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        // Burada axios veya başka bir yöntemle ilgili etkinlik verilerini çekebilirsiniz
        axios.get(`http://51.20.118.182/api/v1/etkinlik/${eventId}`)
            .then((response) => {
                setEventData(response.data); // Örnek: response.data, çekilen etkinlik verilerini içerir
            })
            .catch((error) => {
                console.error('Error fetching event data:', error);
            });
    }, [eventId]);

    const formik = useFormik({
        initialValues: {
            aciklama: eventData?.aciklama || '',
            konumAdi: eventData?.konumAdi || '',
            adres: eventData?.adres || '',
            etkinlikType: eventData?.etkinlikType || '',
            etkinlikBaslangic: eventData?.etkinlikBaslangic || '',
            etkinlikBitis: eventData?.etkinlikBitis || '',
            etkinlikUcretleri: eventData?.etkinlikUcretleri || [
                {
                    kategoriType: '',
                    fiyat: '',
                },
            ],
            etkinlikResimleri: eventData?.etkinlikResimleri || [
                {
                    resimAd: '',
                },
            ],
        },
        onSubmit: (values) => {
            axios.put(`http://51.20.118.182/api/v1/etkinlik/update/${eventId}`, values)
                .then((res) => {
                    console.log('Update Success!');
                })
                .catch((error) => {
                    console.error('Error updating event:', error);
                });
        },
    });
    const handleAddCategory = () => {
        formik.setValues((prevValues) => ({
            ...prevValues,
            etkinlikUcretleri: [
                ...prevValues.etkinlikUcretleri,
                {
                    kategoriType: '',
                    fiyat: '',
                },
            ],
        }));
    };

    const handleRemoveCategory = () => {
        if (formik.values.etkinlikUcretleri.length > 1) {
            formik.setValues((prevValues) => ({
                ...prevValues,
                etkinlikUcretleri: prevValues.etkinlikUcretleri.slice(0, -1),
            }));
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} style={{ margin: '5%' }}>
            <TextField
                id="aciklama"
                label="Açıklama"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.aciklama}
                margin="normal"
            />
            <TextField
                id="konumAdi"
                label="Konum Adı"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.konumAdi}
                margin="normal"
            />
            <TextField
                id="adres"
                label="Adres"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.adres}
                margin="normal"
            />
            <TextField
                id="etkinlikType"
                label="Etkinlik Türü"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.etkinlikType}
                margin="normal"
            />
            <TextField
                id="etkinlikBaslangic"
                label="Başlangıç Tarihi - Saati"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.etkinlikBaslangic}
                margin="normal"
            />
            <TextField
                id="etkinlikBitis"
                label="Bitiş Tarihi - Saati"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.etkinlikBitis}
                margin="normal"
            />
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                    <Button type="button" variant="contained" color="primary" onClick={handleAddCategory}>
                        Kategori Ekle
                    </Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleRemoveCategory} style={{ marginTop: '5px' }}>
                        Kategori Kaldır
                    </Button>
                </div>
                <div >
                    {formik.values.etkinlikUcretleri.map((ucret, index) => (
                        <div key={index} >
                            <TextField
                                id={`kategoriType-${index}`}
                                label={`Kategori Type ${index + 1}`}
                                variant="outlined"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    formik.setFieldValue(`etkinlikUcretleri[${index}].kategoriType`, e.target.value);
                                }}
                                value={formik.values.etkinlikUcretleri[index].kategoriType}
                                margin="normal"
                                style={{ marginLeft: '5px' }}
                            />
                            <TextField
                                id={`fiyat-${index}`}
                                label={`Fiyat ${index + 1}`}
                                variant="outlined"
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    formik.setFieldValue(`etkinlikUcretleri[${index}].fiyat`, e.target.value);
                                }}
                                value={formik.values.etkinlikUcretleri[index].fiyat}
                                margin="normal"
                                style={{ marginLeft: '5px' }}
                            />
                        </div>
                    ))}
                </div>

            </div>
            <Button type="submit" variant="contained" color="primary">
                Gönder
            </Button>
        </form>
    );
};

export default UpdateEtkinlik;
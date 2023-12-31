import '../js/scripts.js'
import '../css/styles.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import AdminSideBar from './AdminSideBar';

function CreateEtkinlik() {

    const formik = useFormik({
        initialValues: {
            ad: '',
            aciklama: '',
            konumAdi: '',
            adres: '',
            etkinlikType: '',
            etkinlikBaslangic: '',
            etkinlikBitis: '',
            etkinlikUcretleri: [{
                kategoriType: '',
                fiyat: '',
            }],
            etkinlikResimleri: [{
                resimAd: '',
            }],
        },
        onSubmit: (values) => {

            axios.post('http://51.20.142.51/api/v1/etkinlik/create', values)
                .then(res => {
                    console.log('Success!');
                })
        }
    })


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

    const handleAddImage = () => {
        formik.setValues((prevValues) => ({
            ...prevValues,
            etkinlikResimleri: [
                ...prevValues.etkinlikResimleri,
                {
                    resimAd: '',
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
    const handleRemoveImage = () => {
        if (formik.values.etkinlikResimleri.length > 1) {
            formik.setValues((prevValues) => ({
                ...prevValues,
                etkinlikResimleri: prevValues.etkinlikResimleri.slice(0, -1),
            }));
        }
    };
    return (<>
        <div className="d-flex" id="wrapper">

            <AdminSideBar />

            <div style={{ margin: '4%', backgroundColor: '#DED2D2', padding: '20px 50px' }}>
                <div>
                    <h2>Etkinlik Oluştur</h2>
                </div>

                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        id="ad"
                        label="Etkinlik Adı"
                        variant="outlined"
                        onChange={formik.handleChange}
                        value={formik.values.ad}
                        margin="normal"
                    />
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
                        label="Etkinlik Tipi"
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
                        <div style={{ display: 'flex', marginLeft: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                                <Button type="button" variant="contained" color="primary" onClick={handleAddImage}>
                                    Resim Ekle
                                </Button>
                                <Button type="button" variant="contained" color="secondary" onClick={handleRemoveImage} style={{ marginTop: '5px' }}>
                                    Resim Kaldır
                                </Button>
                            </div>
                            <div >
                                {formik.values.etkinlikResimleri.map((resim, index) => (
                                    <div key={index} >
                                        <TextField
                                            id={`resimAd-${index}`}
                                            label={`Resim ${index + 1}`}
                                            variant="outlined"
                                            onChange={(e) => {
                                                formik.handleChange(e);
                                                formik.setFieldValue(`etkinlikResimleri[${index}].resimAd`, e.target.value);
                                            }}
                                            value={formik.values.etkinlikResimleri[index].resimAd}
                                            margin="normal"
                                            style={{ marginLeft: '5px' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'right', marginRight: '50px' }}>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '5px' }}>
                            Gönder
                        </Button>
                    </div>
                </form>
            </div>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </>)
}

export default CreateEtkinlik
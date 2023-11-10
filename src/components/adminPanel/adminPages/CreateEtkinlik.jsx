import { Box, Button, MenuItem, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React, { Fragment } from 'react'

function CreateEtkinlik() {
    const etkinlikTip = [
        {
            value: 'KONSER',
            label: 'Konser',
        },
        {
            value: 'SINEMA',
            label: 'Sinema',
        },
        {
            value: 'TIYATRO',
            label: 'Tiyatro',
        },
        {
            value: 'SEMINER',
            label: 'Seminer',
        },
    ];

    const formik = useFormik({
        initialValues: {
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

            axios.post('http://51.20.118.182/api/v1/etkinlik/create', values)
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

    const handleRemoveCategory = () => {
        if (formik.values.etkinlikUcretleri.length > 1) {
            formik.setValues((prevValues) => ({
                ...prevValues,
                etkinlikUcretleri: prevValues.etkinlikUcretleri.slice(0, -1),
            }));
        }
    };
    return (<>
        <div>
            <h2>Create Etkinlik</h2>
        </div>


        <form onSubmit={formik.handleSubmit}>
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
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="etkinlik-tip"
                    select
                    label="Etkinlik Tip"
                    defaultValue="KONSER"
                    onChange={formik.handleChange}
                    value={formik.values.etkinlikType}
                    margin="normal"
                    style={{ width: '211px' }}
                >
                    {etkinlikTip.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
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


    </>)
}

export default CreateEtkinlik
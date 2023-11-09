import React, { useEffect, useState } from 'react'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import CreateEtkinlik from './CreateEtkinlik'
import UpdateEtkinlik from './UpdateEtkinlik'
import axios from 'axios';

function AdminMainPage() {
    const navigate = useNavigate();

    const handleUpdateButtonClick = (eventId) => {
        // Butona tıklandığında, UpdateEtkinlik sayfasına yönlendirme yapılır
        navigate.push(`/update/${eventId}`);
    };

    const [etkinliklist, setetkinliklist] = useState([]);

    useEffect(() => {
        loadEtkinlik();
    }, [])

    const loadEtkinlik = () => {
        axios.get(`http://51.20.118.182/api/v1/etkinlik/list`)
            .then((response) => {
                setetkinliklist(response.data);
            })
            .catch((error) => {
                console.error('Error fetching event data:', error);
            });
    }


    const deleteEtkinlik = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {

            axios.delete('http://51.20.118.182/api/v1/etkinlik/delete/' + id)
                .then(res => {
                    loadEtkinlik();
                })
        }
    }


    return (<>
        {/* <Routes>
            <Route path="/admin/create" element={<CreateEtkinlik />} />
            <Route path="/admin/update" element={<UpdateEtkinlik />} />
        </Routes> */}




        <table>
            <thead>
                <tr>
                    <th>Açıklama</th>
                    <th>Konum Adı</th>
                    <th>Adres</th>
                    <th>Etkinlik Türü</th>
                    <th>Başlangıç Tarihi - Saati</th>
                    <th>Bitiş Tarihi - Saati</th>
                </tr>
            </thead>
            <tbody>
                {etkinliklist && etkinliklist.map((event, index) => (
                    <tr key={index}>
                        <td>{event.aciklama}</td>
                        <td>{event.konumAdi}</td>
                        <td>{event.adres}</td>
                        <td>{event.etkinlikType}</td>
                        <td>{event.etkinlikBaslangic}</td>
                        <td>{event.etkinlikBitis}</td>
                        <td>
                            <button onClick={() => handleUpdateButtonClick(event.id)}>Güncelle</button>
                        </td>
                        <td>
                            <button onClick={() => deleteEtkinlik(event.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>


    </>)
}

export default AdminMainPage
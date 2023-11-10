import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from '@mui/material';

function AdminMainPage() {

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



        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Etkinlikler</h2>
            <Button onClick={() => loadEtkinlik()}>Listeyi Güncelle</Button>
        </div>

        <table className='w3-table w3-striped w3-bordered w3-hoverable' style={{ maxWidth: 1100 }}>
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
                        <td>{event.etkinlikBitis}</td>{/* 
                        <td>
                            <Link to='/admin/update' className="button">Update</Link>
                        </td> */}
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
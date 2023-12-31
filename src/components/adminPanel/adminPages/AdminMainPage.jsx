import '../js/scripts.js'
import '../css/styles.css'
import './admin.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminSideBar from './AdminSideBar';

function AdminMainPage() {

    const [etkinliklist, setetkinliklist] = useState([]);

    useEffect(() => {
        loadEtkinlik();
    }, [])

    const loadEtkinlik = () => {
        axios.get(`http://51.20.142.51/api/v1/etkinlik/list`)
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

        <div className="d-flex" id="wrapper">

            <AdminSideBar />

            <div style={{ margin: '4%', backgroundColor: '#DED2D2', padding: '20px 50px', width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '98%' }}>
                    <h2>Etkinlikler</h2>
                    <button onClick={() => loadEtkinlik()} className='admin-button'>Listeyi Güncelle</button>
                </div>

                <table className='w3-table w3-striped w3-bordered w3-hoverable' style={{ width: '95%' }}>
                    <thead>
                        <tr>
                            <th>Etkinlik Adı</th>
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
                                <td>{event.ad}</td>
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
                                    <button onClick={() => deleteEtkinlik(event.id)} className='admin-button'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </>)
}

export default AdminMainPage
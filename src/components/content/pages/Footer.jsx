import React from 'react'

function Footer() {
    return (<>
        <div className="footer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(26, 58, 65, 0.7)', color: '#F2F2F2', padding: '20px 50px' }}>
            <div>
                <h1 className="logo-text"><span>TechCareer</span></h1>
            </div>
            <div>
                <p>
                    TechCareer Front-End Bootcamp 2023
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginRight: '10px' }}>
                    <h4>Burak Erdem</h4>
                </div>
                <div>
                    <h4>Mustafa Sarıbaş</h4>
                </div>
            </div>
        </div>
    </>)
}

export default Footer
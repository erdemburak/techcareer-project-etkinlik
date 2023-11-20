import React from 'react'

function Footer() {
    return (<>
        <div className="footer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#707070', color: '#F2F2F2', padding: '20px' }}>
            <div>
                <h1 className="logo-text"><span>TechCareer</span></h1>
            </div>
            <div>
                <p>
                    TechCareer Front-End Bootcamp 2023
                </p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px' }}>
                    <h4>Burak Erdem</h4>
                    <i className="fas fa-phone"></i> &nbsp; 0553 567 4754 <br />
                    <i className="fas fa-envelope"></i> &nbsp; burakerdem6@hotmail.com
                </div>
                <div>
                    <h4>Mustafa Sarıtaş</h4>
                    <i className="fas fa-phone"></i> &nbsp; <br />
                    <i className="fas fa-envelope"></i> &nbsp;
                </div>
            </div>
        </div>
    </>)
}

export default Footer
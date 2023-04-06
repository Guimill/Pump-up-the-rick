import React from 'react';
import ReactDOM from 'react-dom/client';
import pumpup from './assets/video/pump.mp4'
import './assets/style/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <main style={{display:"flex", justifyContent: "center", alignItems: "center", width:"100vw", height: "100vh", backgroundColor: "silver"}}>
                <video style={{ width:"50vw", height: "50vh"}} controls autoPlay>
                    <source src={pumpup}/>
                </video>
        </main>
    </React.StrictMode>
);
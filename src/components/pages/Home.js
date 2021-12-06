import React from 'react';
import '../../App.css';
import video from '../../images/twollamavideo.mp4';
import { Button } from "@material-ui/core";

function Home() {
    return (
        <div className='home'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <h1 id='text'>Your Llama Adventure Awaits You...</h1>    
                <Button variant="contained" color="secondary" size="large" href="/widget-page">Choose Your Destination</Button>
            </div>
            <video id='vid' src={video} autoPlay loop muted/>
        </div>
    )
}

export default Home;
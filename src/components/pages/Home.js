import React from 'react';
import '../../App.css';
import video from '../../images/twollamavideo.mp4';
import { Button } from "@material-ui/core";

function Home() {
    return (
        <div className='home'>
            <h1 id='text'>Your Llama Adventure Awaits You...</h1>    
            <Button variant="contained" href="/widget-page">Choose Your Destination</Button>
            <video id='vid' src={video} autoPlay loop muted/>
        </div>
    )
}

export default Home;
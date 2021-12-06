import React from 'react';
import '../../App.css';
import Destination from '../Destination';
import video from '../../images/twollamavideo.mp4';

function Home() {
    
  
    function changeSizeByBtn() {
        document.getElementById('text').style.fontSize= 95 +'px';
    }
    function decreaseSizeByBtn() {
        document.getElementById('text').style.fontSize= 50 +'px';
    }
    function stopVideo(){
        document.getElementById('vid').remove();
       
    }
    return (
        <div className='home'>
           
            <h1 id='text'>Your Llama Adventure Awaits You...</h1>
            
           
            <Destination/>
            <video id='vid' src={video} autoPlay loop muted/>
            <br></br>
            <button type="button" onClick={decreaseSizeByBtn} name="btn1">
                A-
            </button>
            <button type="button" onClick={changeSizeByBtn} name="btn2">
                A+
            </button>
            <button type="button" onClick={stopVideo} name="btn3">
                No Background
            </button>
            
            
           


            
        </div>
    )
}

export default Home;
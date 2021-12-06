import React from 'react'

function AccessibilityMenu() {
    
    function accessibility(e) {
        if(localStorage.getItem('noVidImg') == 'enabled'){
          document.body.classList.toggle('no-vid-img');
        }
        if(localStorage.getItem('incFont') == 'enabled'){
          document.body.classList.toggle('inc-font');
        }
      }

    function NoVidIMg(e){
        document.body.classList.toggle('no-vid-img');
        if (document.body.classList.contains('no-vid-img')) {
            localStorage.setItem('noVidImg','enabled');
        } else{
            localStorage.setItem('noVidImg','disabled');
        }
    }
    function IncFontSize(e){
        document.body.classList.toggle('inc-font');
        if (document.body.classList.contains('inc-font')) {
            localStorage.setItem('incFont','enabled');
        } else{
            localStorage.setItem('incFont','disabled');
        }
    }
    return (
        <div className='accessibility-menu'>
            {accessibility}
            <label class="switch">
                <input type="checkbox" onClick={IncFontSize} />
                Enlarged Text
                <span class="slider"></span>
            </label>
            <br></br>
            <label class="switch">
                <input type="checkbox" onClick={NoVidIMg}/>
                No Images/Videos
                <span class="slider"></span>
            </label>
            <br></br>
            
        </div>
    )
}

export default AccessibilityMenu

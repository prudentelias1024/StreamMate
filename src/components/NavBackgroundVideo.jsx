import { useRef } from 'react';
import VideoJS from './VideoJS'
import videojs from "video.js"; 
function NavBackgroundVideo() {
    const playerRef = useRef(null)
    const videoJSOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid:true,
        sources: [
            {src:'bg.mp4',type: 'video/mp4'}
        ]
    }
    const handlePlayerReady = (player) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on('waiting', () => {
          videojs.log('Load');
        });
    
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
      };
   
    return(
    <>
    <VideoJS options={videoJSOptions} onReady={handlePlayerReady} />
    </>

    );
}

export default NavBackgroundVideo;
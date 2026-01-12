import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4'

const VideoPlayer = ({ showVideo, setShowVideo }) => {

    const player = useRef(null)

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setShowVideo(false)
            player.current?.pause()
        }
    }

    return (
        <div className={`videoplayer ${showVideo ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video} autoplay muted controls></video>
        </div>
    )
}

export default VideoPlayer
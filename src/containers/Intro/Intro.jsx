import React, { useRef, useState } from 'react'
import './Intro.css'
import { BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import { meal } from '../../constants'


const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const [background, setBackground] = useState("transparent");
  const [circleVisibility, setCircleVisibility] = useState("visible");

  
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo){
      vidRef.current.pause();
      setBackground("rgba(0, 0, 0, 0.4)");
    }else{
      vidRef.current.play();
      setBackground("transparent");
    }
  }

  const handleMouseOver = () => {
    setCircleVisibility("visible");
  }

  const handleMouseOut = () => {
    setCircleVisibility("hidden");
  }

  return (
    <div className='app__video'
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <video src={meal} 
      ref = {vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted/>
      <div className='app__video-overlay flex__center'
      style={{ background }}>
        <div 
        className='app__video-overlay_circle flex__center'
        onClick = {handleVideo}
        style={{ visibility: circleVisibility }}
        >
          {playVideo 
          ? <BsPauseFill  color="#fff" fontSize={30}/>
          : <BsFillPlayFill color="#fff" fontSize={30}/>}
        </div>
      </div>
    </div>
  )
}

export default Intro
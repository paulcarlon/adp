import React, { useState, useRef, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { BsArrowLeftShort } from "react-icons/bs"
// import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import iDRM from '../audio/iDRM.mp3'

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // const calculateTime = (secs) => {
  //   const minutes = Math.floor(secs / 60);
  //   const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //   const seconds = Math.floor(secs % 60);
  //   const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //   return `${returnedMinutes}:${returnedSeconds}`;
  // }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  // const backThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value - 30);
  //   changeRange();
  // }

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // }

  return (
    <div style={{ maxHeight: '80px', width: '95vw' }}>
      <Row className="mx-auto w-50"><Col sm={7}>
      <audio ref={audioPlayer} src={iDRM} preload="metadata"></audio>
      {/* <button  onClick={backThirty}><BsArrowLeftShort /> 30</button> */}
      <h4 style={{ color: 'rgba(255, 255, 255, 1)', padding: '5px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255, .2)', fontFamily: 'sans-serif', textWrap: 'nowrap', fontSize: '1em'}}>It Don't Really Matter</h4>
      </Col><Col sm={1}>
      <button style={{ color: 'rgba(0,0,0, .9)', padding: '5px', borderRadius: '6px', justifyContent: 'center', alignContent: 'center',  alignItems: 'center', backgroundColor: 'rgba(255,255,255, .4)',  fontFamily: 'sans-serif', fontWeight: '600', fontSize: '1em' }} onClick={togglePlayPause} >
        {isPlaying ? <FaPause /> : <FaPlay />}
        {/* {isPlaying ? 'Pause' : 'Play'} */}

      </button>
      </Col><Col sm={3}>
      {/* <button  onClick={forwardThirty}>30 <BsArrowRightShort /></button> */}

      {/* current time */}
      {/* <div style={{ color: '#fff' }}>{calculateTime(currentTime)}</div> */}

      {/* progress bar */}
      <div >
        <input type="range"  defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      {/* <div style={{ color: '#fff' }}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div> */}
      </Col></Row>
    </div>
  )
}

export { AudioPlayer }

import aubrey from '../images/aubrey.png'
import aub from '../images/aub.png'
import aubpiano from '../images/aubpiano.jpeg'
import apps from '../images/apps.jpg'

import { useState, useEffect } from 'react'
const Biography = () => {
  const [bgImg, setBgImg] = useState(aubrey)
  
  const listenScrollEvent = e => {
    if (window.scrollY > 500 && window.scrollY < 1000) {
      setBgImg(aubpiano)
    } else if(window.scrollY > 1000 && window.scrollY < 1500){
      setBgImg(aubrey)
    } else if(window.scrollY > 1500){
      setBgImg(aub)
    }  else{
      setBgImg(apps)
    }}

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
  return (
    <div className="" style={{   
      backgroundSize: '100%',
      margin: '15px',
     }}>
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      backgroundSize: '100%',

        alignItems: 'center', backgroundImage: `url(${bgImg})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '100%',}} ><h1 style={{ fontSize: '4em', color: 'slateblue', textShadow: '0px 0px 4px #000', marginTop: '.6em' }}>Biography</h1>
        {/* <Row><Col style={{ overflowX: 'hidden'}} xs={4}><img src={apps} style={{  maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col><Col xs={4}>
        <img src={aub} style={{  maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col><Col xs={4}>
      <img src={aubpiano} style={{   maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col></Row> */}
      <p className="pt-4 h4 mx-4" style={{ color: '#333',   textShadow: '0px 0px 15px #fff', fontWeight: '500', overflow: 'scroll', overflowX: 'hidden' }}>
      ( she/ they/ whatever/ <span muted style={{ textDecoration: 'line-through' }}>sir</span>)
      <br /><br />Born in a small midwestern town & raised by her very tough, intelligent, and loving mother. <br /><br />Aubrey always knew she was different but learned quickly that existing in society when you aren't like everybody else can be trying, at times, to say the least. Thankfully there was never a shortage of things of do. Whether it was listening to and/or playing music, skateboarding, or designing graphics and coding web sites on her computer. Things hit a rough patch in her senior year of high school. After a near-death car accident her perspective shifted quite a bit. <br /><br />By age 22 she was off to the city for good! She spent time living in Nebraska, Colorado, and Indiana, then finally made the 30 hour trek to move with all her belongings in her car to Las Vegas! Nearly five years later she still loves her surroundings and friends but as each day goes by she realizes more everyday that: this is it! It's now or never. Life is short. Believe in yourself before its too late. <br/><br />Thanks for being a part of my journey! <p className="text-white" style={{ fontFamily: 'WindSong, cursive', textShadow: '2px 2px 5px #000', fontSize: '2.2em' }}>aubrey digital</p></p>
    </div></div>
  )
}

export default Biography

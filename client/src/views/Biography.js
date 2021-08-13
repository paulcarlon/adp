import aubrey from '../images/aubrey.png'

const Biography = () => {
  return (
    <div className="" style={{   
      backgroundSize: '100%',
      margin: '15px',
        height: '100vh',
     }}>
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${aubrey})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '80vh',}} ><h1 style={{ fontSize: '4em', marginTop: '.6em' }}>Biography</h1>
      <p className="pt-4 mx-4" style={{ color: '#333', fontSize: '1.4em',  fontWeight: '500', overflow: 'scroll', overflowX: 'hidden' }}>Born in small midwestern town to a very loving mother, and a mostly absent father. <br /><br />Aubrey was an outcast growing up in her hometown and only through music, skateboarding, and computers did she learn to call it home. Some great people along the way helped also! After a near-death car accident at age 17 her perspective shifted quite a bit. <br /><br />By age 22 she was off to the big city for good! After spending time living in Nebraska, Colorado, and Indiana, she made the 30 hour trek to move with all her belongings in her car to Las Vegas! Nearly five years later Aubrey still loves her surroundings but as time has drug on she realizes more everyday that: this is it! It's now or never. Believe in yourself before its too late.<br/><br />Thanks for being a part of my journey! <p className="text-white" style={{ fontFamily: 'WindSong, cursive', textShadow: '2px 2px 5px #000', fontSize: '2.9em' }}>aubrey digital 😘</p></p>
    </div></div>
  )
}

export default Biography

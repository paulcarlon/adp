import aubrey from '../images/aubrey.png'

const Music = () => {
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
        marginTop: '50px',
        alignItems: 'center', backgroundImage: `url(${aubrey})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
       height: '80vh',}} ><h1 style={{ fontSize: '4em', marginTop: '.6em' }}>Music</h1>
      <iframe title="aubrey" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1102860115&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}><a href="https://soundcloud.com/aubreydigital" title="aubrey digital" target="_blank" style={{ color: '#cccccc', textShadow: '2px 2px 5px #333', textDecoration: 'none' }}>aubrey digital</a><p style={{ color: '#cccccc', fontSize: '1em', textShadow: '2px 2px 5px #333'}}> X </p><a href="https://soundcloud.com/aubreydigital/d-e-s-t-i-n-y" title="d e s t i n y" target="_blank" rel="noreferrer" style={{  color: '#cccccc', textDecoration: 'none', textShadow: '2px 2px 5px #333' }}>d e s t i n y</a></div>
    </div></div>

  )
}

export default Music

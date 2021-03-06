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
      <iframe title="aubreydigital" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106226691&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',  fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100'}}><a href="https://soundcloud.com/aubreydigital" title="aubrey digital" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none'}}>aubrey digital</a> · <a href="https://soundcloud.com/aubreydigital/it-dont-really-matter" title="It Don&#x27;t Really Matter" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none'}}>It Don&#x27;t Really Matter</a></div>
      <iframe title="otherone" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106407039&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',  fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/aubreydigital" title="aubrey digital" target="_blank" rel="noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>aubrey digital</a> · <a href="https://soundcloud.com/aubreydigital/refresh" title="Refresh" target="_blank" rel="noreferrer" style={{color: '#cccccc',  textDecoration: 'none'}}>Refresh</a></div>
    </div></div>

  )
}

export default Music

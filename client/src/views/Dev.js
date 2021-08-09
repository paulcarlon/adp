import aubrey from '../images/aubrey.png'

const Dev = () => {
  return (
    <div className="" style={{   
      backgroundSize: '100%',
      margin: '30px',
        height: '100vh',
     }}>
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${aubrey})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '83vh',}} >
      <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>"At Dev In Creation"</h1>
    </div></div>
  )
}

export default Dev

import aubrey from '../images/aubrey.png'


const Home = () => {


  return (
    <div style={{   
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
        marginTop: '50px', height: '60vh',}} >
      <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>thank you so much for visiting my home on the web!</h1>
    </div></div>
  )
}

export default Home

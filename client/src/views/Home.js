import aub from '../images/aub.png'
import { FaReact, FaJs } from 'react-icons/fa'
import { TwitterFollowButton } from 'react-twitter-embed'

const Home = () => {


  return (
    <div style={{   
      backgroundSize: '100%',
      margin: '15px',
        height: '100vh',
     }}>
       <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        backgroundBlendMode: 'screen', backgroundSize: '100%', borderRadius: '10px',
        marginTop: '50px', height: '15vh',}} >
      {/* <h1 style={{  color: '#fff', fontSize: '2em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}></h1> */}
      <h2 style={{fontSize:'1.7em', fontFamily: 'Libre Franklin, sans-serif', padding: '1em', marginTop: '1.3em' }}>
        <span className="h4" style={{ textShadow: '3px 3px 6px #000', padding:'1em', color: '#fff', borderRadius: '6px', whiteSpace: 'nowrap',  backgroundColor: 'rgba(155, 155, 155, 0.3)' }}>baroque pop <span style={{ color: 'red', textShadow: '1px 1px 10px #fff' }}>&&</span> web development </span>
        <br />
        <TwitterFollowButton
    screenName={'aubreydigital'}
  />
        <br />
        </h2>
    </div>
    <div style={{ display: 'relative',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${aub})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', backgroundSize: '100%', borderRadius: '10px', height: '0vh',}} ></div>
        <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'start',
        alignItems: 'center', backgroundImage: `url(${aub})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', backgroundSize: '100%', borderRadius: '10px', height: '60vh',}} ><span className="h3" style= {{ padding: '1em',fontFamily: 'Libre Franklin, sans-serif', marginLeft: '1em', marginRight: '1em', textAlign: 'center', textShadow: '1px 1px 6px #fff' }}><span className="h1" style={{ whitespace: 'nowrap' }}>aubrey</span> is a creator of sound & software.<br /><br /> <span className="h1">aubrey</span> specializes in Front-End Web Development with JavaScript <FaJs /> & React <FaReact />.<br /><br /><span className="h1">aubrey</span> also specializes in Electric Guitar, Songwriting, and Recording</span></div>
    </div>
  )
}

export default Home

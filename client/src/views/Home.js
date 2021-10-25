import { FaReact, FaJs } from 'react-icons/fa'
import { TwitterFollowButton } from 'react-twitter-embed'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {


  return (
    <div style={{   
      backgroundSize: '100%',
      margin: '15px',
        height: '100vh',
     }}>
       <Row>
       <Col style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column',
        backgroundBlendMode: 'screen', backgroundSize: '100%', borderRadius: '10px', mineight: '50vh'
        }} >
      {/* <h1 style={{  color: '#fff', fontSize: '2em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}></h1> */}
      <h2 style={{fontSize:'1.7em', fontFamily: 'Libre Franklin, sans-serif', padding: '1em', marginTop: '1.3em' }}>
        <span className="h4" style={{ textShadow: '3px 3px 6px #000', padding:'1em', color: '#fff', borderRadius: '6px', whiteSpace: 'nowrap',  backgroundColor: 'rgba(155, 155, 155, 0.3)' }}>baroque pop <span style={{ color: 'red', textShadow: '1px 1px 10px #fff' }}>&&</span> web development </span>
        <br />
        <TwitterFollowButton
    screenName={'aubreydigital'}
  />
        </h2>
    </Col>
    </Row>
        <div className="h4" style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center', color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 192, 203, .3',
         backgroundSize: '100%', borderRadius: '10px', minHeight: '60vh',}} >
          <span className="h3" style= {{ padding: '1em',fontFamily: 'Libre Franklin, sans-serif', marginLeft: '1em', marginRight: '1em', textAlign: 'center', textShadow: '1px 1px 6px rgba(100, 0, 100, .6)' }}><span className="h2" style={{ whitespace: 'nowrap' }}>aubrey</span> is a creator of sound & software.<br /><br /> <span className="h2">aubrey</span> specializes in Front-End Web Development with JavaScript <FaJs /> & React <FaReact />.<br /><br /><span className="h2">aubrey</span> also specializes in Electric Guitar, Songwriting, and Recording</span></div>
    </div>
  )
}

export default Home

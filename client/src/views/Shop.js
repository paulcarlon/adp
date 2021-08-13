import music from '../images/music.jpg'
import sbp from '../images/sbp.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div style={{   
      backgroundSize: '100%',
      margin: '15px',
        height: '100vh',
     }}>
       <Row>
         <Col sm={12} md={6}>
         <Link to="/musicshop">
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${music})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '60vh',}} >
      {/* <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>Music</h1> */}
      Music
    </div></Link></Col>
    <Col sm={12} md={6}>
    <Link to="/appshop">
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${sbp})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '60vh',}} >
      {/* <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>Web Apps</h1> */}
      Web Apps
      
    </div>
    </Link>
    </Col></Row>
    </div>
  )
}

export default Shop


import apps from '../images/apps.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link } from 'react-router-dom'

const AppShop = () => {
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
        alignItems: 'center', backgroundImage: `url(${apps})`, backgroundSize: '100%',
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
         marginTop: '50px', height: '80vh',}} ><h1 style={{ fontSize: '4em', textShadow: '4px 4px 10px #fff', fontFamily: 'VT323, monospace', marginTop: '.6em' }}>Digital Presence</h1>
       <Row lg={2} className="mb-5">
         <Col sm={12} md={6}>
         <Link className="disabled-link" to="/shop">
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(155, 92, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '60vh',}} >
      {/* <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>Music</h1> */}
      Client-Side $100
    </div></Link></Col>
    <Col sm={12} md={6}>
    <Link className="disabled-link" to="/shop">
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'rgba(155, 92, 203, .8',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '60vh',}} >
      {/* <h1 style={{  color: '#fff', fontSize: '5em', textShadow: '3px 3px 10px #000', fontFamily: 'Indie Flower, cursive' }}>Web Apps</h1> */}
      Full-Stack( w/ Database)
      $150
    </div>
    </Link>
    </Col></Row>
    </div>
    </div>
  )
}

export default AppShop

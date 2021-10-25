import sbp from '../images/sbp.png'
import adp from '../images/adp.png'
import pc from '../images/pc.png'
import sew from '../images/sew.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Dev = () => {
  return (
    <div className="" style={{   
      backgroundSize: '100%',
      margin: '30px',
        height: '100vh',
     }}>
       <Row>
         <Col xs={12} lg={4}>
         <a href="https://aubrey.digital" rel="noreferrer" target="_blank">
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundSize: '100%',backgroundImage: `url(${adp})`,
        backgroundColor: 'rgba(255, 192, 203, .5',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '40vh',}} >
      <h1 style={{  color: '#fff', fontWeight: '600', textShadow: '1px 1px 3px #000', fontFamily: 'Indie Flower, cursive' }}>aubrey digital portfolio</h1>
    </div>
    </a>
    </Col><Col xs={12} lg={4}>
    <a href="https://sbphotography.herokuapp.com" rel="noreferrer" target="_blank">
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundSize: '100%', backgroundImage: `url(${sbp})`,
        backgroundColor: 'rgba(255, 192, 203, .5',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '40vh',}} >
      <h1 style={{  color: '#fff', fontWeight: '600', textShadow: '1px 1px 5px #000', fontFamily: 'Indie Flower, cursive' }}>Shannon Beelman Photography</h1>
    </div>
    </a>
    </Col>
    {/* <Col xs={12} lg={4}>
    <a href="https://paulcarlon.com" rel="noreferrer" target="_blank">
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundSize: '100%', backgroundImage: `url(${pc})`,
        backgroundColor: 'rgba(255, 192, 203, .5',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '40vh',}} >
      <h1 style={{  color: '#fff', fontWeight: '600', textShadow: '1px 1px 5px #000', fontFamily: 'Indie Flower, cursive' }}>Paul Carlon</h1>
    </div>
    </a>
    </Col> */}
    <Col xs={12} lg={4}>
    <a href="https://www.sewenhanced.com" rel="noreferrer" target="_blank">
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundSize: '100%', backgroundImage: `url(${sew})`,
        backgroundColor: 'rgba(255, 192, 203, .5',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px', height: '40vh',}} >
      <h1 style={{  color: '#fff', fontWeight: '600', textShadow: '1px 1px 5px #000', fontFamily: 'Indie Flower, cursive' }}>Sew Enhanced: Fashion Store</h1>
    </div>
    </a>
    </Col>
    </Row>
    </div>
  )
}

export default Dev

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { LinkContainer } from 'react-router-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar
    style={{ backgroundColor: '#923cb5', marginTop: '1em',
    backgroundImage: 'linear-gradient(217deg, #923cb5 0%, rgba(66, 0, 66, .93) 74%)', borderRadius: '10px', opacity: '100%' }}
    sticky="top"
    className="text-white mb-3 rounded"
      collapseOnSelect
      expand='lg'

    >
      <LinkContainer to='/'>
        <Navbar.Brand>
          <h1 style={{ color: '#fff', marginTop: '.6em', marginLeft: '15px', textShadow: '0px 0px 6px rgba(255,192, 203, 1)' }}>aubrey digital</h1>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle
        className='border rounded p-2 me-4 mb-2'
        style={{
          marginTop: '.6em',
          backgroundColor: 'rgba(255, 255, 255, .4)',
          boxShadow: '4px 7px 20px #333',
        }}
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse style={{ marginTop: '1.1em' }}>
        <Nav style={{ width: '100%'}}>
        <LinkContainer to='/shop'>
            <Nav.Link className="p-3"><p style={{ fontSize: '.8em', fontWeight: '600', }}>Shop</p></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/dev'>
            <Nav.Link className="p-3"><p style={{ fontSize: '.8em', fontWeight: '600', }}>Web Design</p></Nav.Link>
          </LinkContainer>
          <LinkContainer to='/music'>
            <Nav.Link className="p-3"><p style={{ fontSize: '.8em', fontWeight: '600', }}>Music</p></Nav.Link>
          </LinkContainer>
          {/* <NavDropdown className="p-3 text-dark" title='Music'>
            <LinkContainer style= {{ backgroundColor: 'rgba(150, 150, 150, 1', fontSize: '1.4em'  }} to='/songs'>
              <NavDropdown.Item  className='text-dark text-center' >
                Songs
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer style= {{ backgroundColor: 'rgba(150, 150, 150, 1', fontSize: '1.4em'   }} to='/videos'>
              <NavDropdown.Item className='text-center text-dark'>
                Videos
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown> */}
          <LinkContainer to='/biography'>
            <Nav.Link className="p-3"><p style={{ fontSize: '.8em', fontWeight: '600', }}>Biography</p></Nav.Link>
          </LinkContainer>
          {/* </div> */}
          <div className='d-flex mx-auto justify-content-between p-4'>
            <a
              href='https://www.facebook.com/aubreydigital'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook style={{ fontSize: '.8em', fontWeight: '600'  }} />
            </a>
            <a
              href='https://www.instagram.com/aubreydigitallv'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram
                className='mx-5'
                style={{ fontSize: '.8em', fontWeight: '600',  }}
              />
            </a>
            <a
              href='https://twitter.com/aubreydigital'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter style={{ fontSize: '.8em', fontWeight: '600',   }} />
            </a>
            </div>
            {/* <div className="mb-4">
            <Link to='/customer/login'>
            <Button size="sm" style={{ backgroundColor: 'darkgreen' }}>Customer Login</Button>
            </Link><br /><p style={{ fontSize: '.9em' }}> New user? <Link style={{ fontSize: '.8em' }} to="/register">Register</Link></p>
          </div> */}
          {/* <div className="pe-3">
          <Search posts={props.posts} data={props.data} />
          </div> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation

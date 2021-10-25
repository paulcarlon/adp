import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import dotenv from 'dotenv'
dotenv.config();

const Login = ({ setIsAdmin, setIsLoggedIn, loggedUser, setLoggedUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      username === '' && alert('You forgot something');
      password === '' && alert('You forgot something');
      if (username === process.env.REACT_APP_USERNAME && password ===   process.env.REACT_APP_PASSWORD) {
      setIsLoggedIn(true)
      setLoggedUser(username)
      history.push("/blog");
      }
    } catch(e) {
      alert(e.message)
    }
    username === 'aubrey' && password === process.env.REACT_APP_PASSWORD && setIsAdmin(true)
  }
  return (
    <Card style={{ backgroundColor: 'rgba(100, 0, 100, .6)' }}className="">
      <Form  onSubmit={onSubmit}>
        <Form.Text className="m-3 pl-5 text-center" style={{ fontFamily: 'Satisfy, cursive', fontWeight: 600, fontSize: '30px' }}>Login</Form.Text>
        <Form.Group className="mx-auto my-3 w-50">
          <Form.Label>Username:</Form.Label>
          <input style={{ borderRadius: '6px'}} type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username}
         /><br />
          <Form.Label>Password:</Form.Label>
          <input style={{ borderRadius: '6px'}} type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <br />
        <Button type="submit" className="my-3 ml-5" style={{ backgroundColor: 'rgba(60, 0, 60, .7)', border: 0 }}  size="lg" value="Submit">Submit</Button>

        </Form.Group>
      </Form>
    </Card>
  )
}

export default Login

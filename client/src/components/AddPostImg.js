import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { useState, useRef} from 'react';
import { useHistory} from 'react-router-dom'

const AddPost = ({ posts, setPosts, getPosts }) => {
  let history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const file = useRef();
  
  
    const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/posts/')
    const data = await res.json();
    return data;
  }

  // const submitImage = async (e) => {
  //   e.preventDefault()
  //     if (file) {
  //       console.log(file);
  //       const data = new FormData();
  //       const filename = Date.now() + file.name;
  //       data.append('name', filename);
  //       data.append('file', file);
  //       setFile(filename)
  //       try {
  //         await fetch('https://aubrey.digital/phpAPI/upload.php', {
  //         method: 'POST',
  //         mode: 'no-cors',
  //         headers: {
  //   'Content-Type': 'multipart/form-data'
  //         },
  //         body: JSON.stringify(file)
  //         });
  //       } catch (err) {
  //         console.log(file.name);
  //       }
  //       fetchData()
  //       // window.location.href = '/';
  //     }
  // }
  const onSubmit = async (e) => {
      e.preventDefault();
      let category_id
      if (category.toLowerCase() === 'programming') {
        category_id = 1;
      } else if (category.toLowerCase() === 'music') {
        category_id = 2;
      } else if (category.toLowerCase() === 'travel') {
        category_id = 3;
      }
      // let newPost = { title, body, image: file.current.files[0].name, category_id };
      // let blogImg = `https://aubrey.digital/phpAPI/api/images/uploads/${image}`
      console.log(image);
      let newPost = { title, body, file_name: image, category_id}
        console.log(newPost);
        try {
          await fetch('https://aubrey.digital/phpAPI/api/images/create.php', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
    'Content-Type': 'multipart/form-data'
          },
          body: JSON.stringify(newPost)
          });
        } catch (err) {
          console.log(file.name);
        }
        fetchData()
        history.push('/blog');
      }
      // const onImage = async (e) => {
      //   e.preventDefault();
      //   console.log(file)
      //     try {
      //       await fetch('https://aubrey.digital/phpAPI/api/upload.php', {
      //       method: 'POST',
      //       mode: 'no-cors',
      //       headers: {
      // 'Content-Type': 'multipart/form-data'
      //       },
      //       body: JSON.stringify(file)
      //       });
      //     } catch (err) {
      //       console.log(file.name);
      //     }
      //     fetchData()
      //     // window.location.href = '/blog';
      //   }

      // const uploader = async() => {

      // }
  
  return (
    <>
    
    <div className="container text-center">
    <div className="row mt-5">
      <div className="col">
      <h3 className="text-center text-white"
        
      >
        write new blog post
      </h3>
      </div>
      </div>
      <Form onSubmit={onSubmit} className='mt-5'>
        <Form.Group controlId='titleBody'>
      <Row style={{ width: '30%' }} className="mx-auto">
        
          <Form.Label
          >
            Title:
          </Form.Label>
          <input
            style={{ borderRadius: '10px' }}
            name='title'
            type='text'
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          </Row>
          <Row style={{ width: '20%' }} className="mx-auto">
          <Form.Label>
            Category:
          </Form.Label>
          <input
            style={{ borderRadius: '10px'}}
            name='title'
            type='text'
            placeholder='title'
            value={category}
            onChange={(e) => setCategory(e.target.value)} />
</Row>
<Row style={{ width: '30%' }} className="mx-auto">
          <textarea
            style={{ borderRadius: '10px', height: '13em', width: '50vw', textAlign: 'center', alignItems: 'center' }}
            type='text'
            name='body'
            placeholder='Your message to the world goes here!'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          </Row>
          <br />    
          <Row>     
          <Col className="mx-auto w-100">
          <input
            style={{ borderRadius: '10px'}}
            name='file'
            type='file'
            placeholder='url'
            value={image}
            onChange={(e) => setImage(e.target.value)} />
    </Col></Row>
        </Form.Group>
        <Form.Group controlId='submit'>
          <input
            type='submit'
            name='submit'
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
      </Form>
    </div>
    </>
  );
};


export default AddPost;

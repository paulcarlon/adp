import {Row, Col} from 'react-bootstrap'
import {useState} from 'react'
const BlogHeader = ({ title }) => {
  let headerText = title
  if (title == 1) {
    headerText = 'Programming'
  } else if (title == 2) {
    headerText = 'Music'
  } else if (title == 3) {
    headerText = 'Travel'
  }
  return (
    <Row><Col xs={12}>
  <h2 className="my-3" style={{ fontFamily: 'Satisfy, cursive', color: 'rgba(180, 0, 180, .9', border: 'rgba(180, 0, 180, .9', fontSize: '3em', textShadow: '1px 1px 5px #fff'}}>{headerText}</h2>
  </Col></Row>
  )
}

export default BlogHeader

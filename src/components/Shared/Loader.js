import React from "react"
import { Container, Row } from "react-bootstrap"
import "./Loader.css"



const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </Row>
    </Container>
  )
}

export default Loader

import React from 'react'
import Buttons from '../../components/Button'
import Card from '../../components/Card'
import './index.css'

const index = () => {
  return (
    <div>
      <div className="container">
      <div className="heading">
        <h1>About Us</h1>
        <p>"At [Website Name], we are passionate about making sustainable living accessible to all. Our mission is to drive positive change by providing eco-friendly products and advocating for environmental stewardship. We believe in sustainability, innovation, and community engagement."</p>
      </div>
      </div>

      <div className="cards">
        <Card />
      </div>

      <div className="btns">
        <Buttons />
      </div>
    </div>
  )
}

export default index;
import React from 'react'
import { Card, Col, Row } from 'antd';
// import 'antd/dist/antd.css';

const App = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="WHO WE ARE" bordered={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vel beatae non esse id natus ut reprehenderit rem quisquam! Enim sunt fuga accusantium.
      </Card>
    </Col>
    <Col span={8}>
      <Card title="OUR HERITAGE" bordered={false}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta quod reiciendis, odit nobis, provident cumque enim neque nesciunt deserunt suscipit veniam earum?
      </Card>
    </Col>
    <Col span={8}>
      <Card title="ABOUT US" bordered={false}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque ut architecto, repellat amet molestias rerum saepe, optio repellendus voluptas incidunt magnam expedita.
      </Card>
    </Col>
  </Row>
);

export default App;
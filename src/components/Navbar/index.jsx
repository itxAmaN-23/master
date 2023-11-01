import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['home']} theme="dark">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="contact-us">
        <Link to="/contact-us">Contact</Link>
      </Menu.Item>

      <Menu.Item key="about-us">
        <Link to="/about-us">About</Link>
      </Menu.Item>
    </Menu>
  );
};

export default index;
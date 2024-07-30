import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Image from 'next/image';

const CustomBurgerIcon = () => <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} /> ;

const Sidebar: React.FC = () => {
  return (
    <Menu customBurgerIcon={ <CustomBurgerIcon /> }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  );
};

export default Sidebar;

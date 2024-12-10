import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { slide as Menu } from "react-burger-menu"

const NavbarWrapper = styled.div`
background-color: #faf4f485;
padding: 20px 30px;
border-radius: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const NavSingleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
`
const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavSingleContainer>
                <p>Lime</p>
                <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
            </NavSingleContainer>
            <NavSingleContainer>

                <p>test</p>
                <Menu isOpen={false} width={'300px'} right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </NavSingleContainer>

        </NavbarWrapper>
    )
}

export default Navbar;


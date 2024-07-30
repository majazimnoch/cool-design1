import React from "react"
import styled from "styled-components"
import Image from "next/image"

const NavbarWrapper = styled.div`
background-color: #faf4f485;
padding: 20px;
border-radius: 30px;
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
            <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} /> 
            <p>test</p>
            </NavSingleContainer>
        
        </NavbarWrapper>
    )
}

export default Navbar;
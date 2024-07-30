"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const  StyledH = styled.h1`
color: red;
`

const StyledWrapper = styled.div`
height:100vh;
padding: 20px;
background: #CC95C0;  
background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0);  
background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0); 
`

export default function Home() {
  return (
    <>
    <StyledWrapper>
      <Navbar />
      <Hero />
    </StyledWrapper>
    <StyledH>Hej</StyledH>
    </>
  );
}

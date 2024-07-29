"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const  StyledH = styled.h1`
color: red;
`

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
       <StyledH>Hej</StyledH>
    </>
  );
}

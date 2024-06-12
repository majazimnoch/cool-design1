"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Hero from "./components/Hero";

const  StyledH = styled.h1`
color: red;
`

export default function Home() {
  return (
    <>
    <Hero />
       <StyledH>Hej</StyledH>
    </>
  );
}

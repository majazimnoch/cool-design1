"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

const  StyledH = styled.h1`
color: red;
`

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
       <StyledH>Hej</StyledH>
      </div>
    </main>
  );
}

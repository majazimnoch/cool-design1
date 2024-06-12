import React from 'react'
import PrimaryButton from './PrimaryButton';
import styled from "styled-components";

const StyledWrapper = styled.div`
width: 100vw;
height:100vh;
background: #CC95C0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`

const Hero = () => {
    return (
      <StyledWrapper>
        <h1>Software and services for successful customer journeys</h1>
        <p>Let’s make it easier for you to find, close, nurture and grow your customer base, with tools designed for the whole customer journey.</p>
        <PrimaryButton>Contact us</PrimaryButton>
      </StyledWrapper>
    );
  };
  
  export default Hero;
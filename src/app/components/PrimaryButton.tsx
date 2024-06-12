import styled, { css } from 'styled-components'

const PrimaryButton = styled.button`
    background-color: green;
    color: var(--primaryBlack);
    font-size: var(--fontSize);
    border: 1.5px solid var(--softPurple);
    border-radius: 30px;
    height: 50px;
    padding: 0 40px;
    cursor: pointer;

    &:hover {
    background-color: red;
    color: var(--primaryWhite);
    transition: 0.2s;
    }
    `;

export default PrimaryButton

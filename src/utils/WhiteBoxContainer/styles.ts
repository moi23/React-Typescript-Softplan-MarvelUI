import styled, { css } from "styled-components";

export const WrapperContainer = styled.div`
    height: 80vh;
    width: 60vw;
    margin-top: 4%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    background: #fff;
    background: transparent;

    &:hover {
        opacity: 80%;
        cursor: pointer;
        transition: 0.3s;
    }
`;

export const ImageHeader = styled.img`
    border: solid 8px white;
    height: auto;
    width: 40vw;
    max-width: 450px;
    border-radius:
    -webkit-border-top-left-radius: 8px;
    -webkit-border-top-right-radius: 8px;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-topright: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;   
`;

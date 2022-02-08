import styled from "styled-components";

const attributes = "solid 8px #fff";

export const WrapperContainer = styled.div`
    width: 60vw;
    height: 80vh;
    margin-top: 4%;

    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    display: flex;
    background: #fff;
    justify-content: center;
    background: transparent;

    &:hover {
        opacity: 80%;
        cursor: pointer;
        transition: 0.3s;
    }
`;

export const ImageHeader = styled.img`
    width: 40vw;
    height: auto;
    max-width: 450px;
    border-top: ${attributes};
    border-left: ${attributes};
    border-right: ${attributes};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-topright: 8px;
    -webkit-border-top-left-radius: 8px;
    -webkit-border-top-right-radius: 8px;
`;

export const BodyContainer = styled.div`
    /* padding: 10px; */
    padding: 2.3%;
    background: #fff;
    border-radius: 8px;
    max-width: 940px;
    width: 60vw;

    /* @media only screen and(min-width: 900px) {
        background: blue;
        padding: 200px;
    } */
`;

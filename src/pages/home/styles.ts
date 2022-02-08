import styled from "styled-components";

export const WrapperContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 100vw; */

    background: linear-gradient(67deg, #0f8bf7, #8e0c8e, #ff0202);
    background-size: 180% 180%;
    animation: gradient-animation 5s ease infinite;

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    overflow: auto;
    overflow-x: hidden;
    height: 300px;
    /* width:100cw */
    justify-content: start;
    flex-wrap: wrap;
    padding-left: 2.9%;
    margin-top: 2%;
`;

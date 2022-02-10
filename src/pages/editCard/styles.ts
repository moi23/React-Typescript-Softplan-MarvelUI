import styled from "styled-components";

export const WrapperContainer = styled.div`
    z-index: 1;
    transition: 0.3s;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 2%;

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

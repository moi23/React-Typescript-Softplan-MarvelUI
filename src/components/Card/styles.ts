import styled from "styled-components";
import defaultImage from "../../assets/images/defaultImage.jpg";

export const WrapperContainer = styled.button`
    height: 184px;
    width: 152px;
    background: #1a141f;
    border-radius: 4px;
    margin: 1.2% 1.1%;
    border: none;
    cursor: pointer;
    &:hover {
        transition: 0.3s;
        opacity: 50%;
        margin-top: 15px;
    }

    .wrapperImageContainer {
        border-radius: 100%;
        height: 40%;
        width: 50%;
        background: url(${defaultImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

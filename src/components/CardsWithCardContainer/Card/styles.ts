import styled from "styled-components";
import defaultImage from "../../../assets/images/defaultImage.jpg";
import starsbg from "../../../assets/images/starsbg.jpg";

export const WrapperContainer = styled.button`
    height: 256px;
    width: 156px;
    background: #1a141f;
    border-radius: 4px;
    margin: 1.2% 1.1%;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-image: url(${starsbg});
    background &:hover {
        transition: 0.3s;
        opacity: 90%;
        /* margin-top: 15px; */
    }

    &:hover span {
        transition: 0.3s;
        background: transparent;
        color: white;
        border: solid 2px white;
    }

    .wrapperImageContainer {
        border-radius: 100%;
        height: 42%;
        width: 70%;
        background: url(${defaultImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 15%;
    }

    h2 {
        color: white;
        margin-top: 15px;
        font-weight: 900;
        display: flex;
        justify-content: center;
    }

    span {
        background: white;
        padding: 8px 20px;
        margin-top: 10%;
        border-radius: 3px;
        font-weight: 600;
        text-transform: uppercase;
    }
`;

export const Wrapper = styled.div`
    a {
        height: 250px;
        width: 180px;
        background: #1a141f;
        border-radius: 4px;
        /* margin: 1.2% 1.1%; */
        margin: 15px 18px;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        text-decoration: none;

        &:hover {
            transition: 0.3s;
            opacity: 90%;
            /* margin-top: 15px; */
        }

        &:hover span {
            transition: 0.3s;
            background: transparent;
            color: white;
            border: solid 2px white;
        }

        .wrapperImageContainer {
            border-radius: 100%;
            height: 42%;
            width: 70%;
            background: url(${defaultImage});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            margin-top: 15%;
        }

        img {
            height: auto;
            max-height: 110px;
            width: 60%;
            margin-top: 28px;
            border-radius: 4px;
        }

        #alignTitle {
            display: flex;
            justify-content: center;
            /* background: red; */
            width: 100%;
            text-align: center;
            padding: 0 4%;
            h4 {
                color: white;
                margin-top: 15px;
                font-weight: 900;
            }
        }

        span {
            background: white;
            padding: 8px 20px;
            margin-top: 10%;
            border-radius: 3px;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
`;

import styled from "styled-components";

export const WrapperContainer = styled.form`
    height: 10vh;
    display: flex;
    align-items: center;
    /* width: 100px; */
    /* background: red; */

    input {
        padding: 25px;
        height: 33px;
        font-size: 21px;
        width: 90%;
        outline: none;
        border: none;
        background: #e6e6e6;
        border-radius: 4px;
    }

    button {
        background: #e6e6e6;
        border: none;
        margin-left: 15px;
        cursor: pointer;
        padding: 15px;
        border-radius: 4px;

        img {
            height: auto;
            width: 50%;
        }

        &:hover {
            opacity: 40%;
            transition: 0.3s;
            background: #1188f5;

            img {
                transition: 0.3s;
                filter: invert(1);
            }
        }
    }
`;

import styled from "styled-components";

export const WrapperContainerForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        padding: 15px;
        background: #8da1cf;
        border: none;
        border-radius: 4px;
        margin-top: 18px;
        outline: none;
        width: 20vw;
        color: white;

        &::placeholder {
            color: white;
        }
    }

    textarea {
        height: 18vh;
        margin-top: 4%;
        padding: 3%;
        background: #8da1cf;
        border: none;
        outline: none;
        color: white;
        margin-bottom: 20px;
        border-radius: 4px;

        &::placeholder {
            color: white;
        }
    }

    .alignButtons {
        display: flex;

        #salvar {
            margin: 0 0 10px;
            width: 100px;
            height: 30px;
            background: #a3da8d;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        #cancelar {
            margin: 0 10px;
            width: 100px;
            height: 30px;
            background: #ee7879;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
    }
`;

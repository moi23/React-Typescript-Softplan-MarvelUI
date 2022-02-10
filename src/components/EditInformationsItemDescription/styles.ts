import styled from "styled-components";

export const WrapperContainer = styled.div`
    display: flex;
    justify-content: center;

    .left {
        padding: 8px 8px;
        display: flex;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        background-size: 180% 180%;
        animation: gradient-animation 3s ease infinite;
        background: linear-gradient(67deg, #0f8bf7, #8e0c8e, #ff0202);

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

        img {
            width: auto;
            height: 30vh;
            border-radius: 8px;
        }
    }

    .right {
        display: flex;
        margin-left: 15px;
        position: relative;
        flex-direction: column;
        justify-content: center;

        h2 {
            color: #0f4f7a;
            font-size: 20px;
            margin-bottom: 15px;
        }

        p {
            width: 309px;
            color: #0f4f7a;
            font-size: 0.8rem;
        }

        #voltarLink {
            color: white;
            width: 100px;
            height: 38px;
            border: none;
            display: flex;
            font-size: 14px;
            margin-top: 14px;
            border-radius: 4px;
            background: #a3da8d;
            align-items: center;
            font-weight: bolder;
            text-decoration: none;
            justify-content: center;
            text-transform: uppercase;

            &:hover {
                color: #a3da8d;
                transition: 0.3s;
                background: none;
                border: solid 2px #a3da8d;
            }
        }

        .controlButtons {
            top: 0;
            right: 0;
            display: flex;
            position: absolute;
            align-items: center;

            #editarLinkFirst {
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 4px;
                background: #ff9b36;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 40%;
                    height: auto;
                }
            }

            #voltarLinkSecond {
                display: flex;
                color: white;
                width: 40px;
                height: 40px;
                border: none;
                font-size: 14px;
                margin-left: 14px;
                border-radius: 4px;
                font-weight: bolder;
                background: #2a71e1;
                align-items: center;
                text-decoration: none;
                justify-content: center;
                text-transform: uppercase;

                img {
                    width: 40%;
                    height: auto;
                }
            }
        }
    }

    .dinamycWidth {
        width: 25vw;
    }
`;

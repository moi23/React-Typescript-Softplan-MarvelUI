import React from "react";

import { WrapperContainer, CardsContainer } from "./styles";

import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import InputSearchButton from "../../components/InputSearchButton";

import CardsWithCardContainer from "../../components/CardsWithCardContainer";

const Home = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <InputSearchButton />
                <CardsWithCardContainer />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default Home;

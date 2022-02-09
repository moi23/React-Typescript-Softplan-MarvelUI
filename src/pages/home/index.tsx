import { useState, useEffect } from "react";

import { WrapperContainer } from "./styles";

import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import InputSearchButton from "../../components/InputSearchButton";
import CardsWithCardContainer from "../../components/CardsWithCardContainer";

import api from "../../api/index";

// import marvelApi from "../../api/marvelApi";

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

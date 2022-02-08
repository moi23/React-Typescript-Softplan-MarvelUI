import React from "react";

import { WrapperContainer, CardsContainer } from "./styles";

import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import InputSearchButton from "../../components/InputSearchButton";
import Card from "../../components/Card";

const Home = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <InputSearchButton />
                <CardsContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    {/* <Card /> */}
                </CardsContainer>
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default Home;

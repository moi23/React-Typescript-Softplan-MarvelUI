import React from "react";
import Card from "./Card";

import { WrapperContainer } from "./styles";

const CardsWithCardContainer = () => {
    return (
        <WrapperContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </WrapperContainer>
    );
};

export default CardsWithCardContainer;

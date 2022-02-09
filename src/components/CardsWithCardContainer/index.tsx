import React, { useEffect, useState } from "react";
import api from "../../api";
import Card from "./Card";

import { WrapperContainer } from "./styles";

const CardsWithCardContainer = () => {
    const [cardList, setCardList] = useState([]);
    useEffect(() => {
        api.get("/characters")
            .then((response) => setCardList(response.data.data.results))
            .catch((error) => console.log(error));
    }, []);
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

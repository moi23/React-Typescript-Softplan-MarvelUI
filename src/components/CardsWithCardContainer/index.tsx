import React, { useEffect, useState } from "react";
import api from "../../api";
import Card from "./Card";

import { ButtonWrapper, WrapperContainer } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { test } from "../../store/Card/Card.actions";

const CardsWithCardContainer = () => {
    const dispatch = useDispatch();

    // busca valor inicial
    const results = useSelector(function (state: any) {
        return state.card;
    });

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        api.get("/characters")
            .then((response) => {
                setCardList(response.data.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        dispatch({
            type: "TEST",
            payload: cardList,
        });
    }, []);

    const setGlobalValueCardSelected = (element: any) => {
        dispatch({
            type: "CARD_INFO",
            payload: {
                id: element.id,
                name: element.name,
                description: element.description,
            },
        });
    };

    return (
        <WrapperContainer>
            {cardList.map((item: any, indice: any) => {
                return (
                    <ButtonWrapper
                        onClick={() =>
                            setGlobalValueCardSelected({
                                id: item.id,
                                name: item.name,
                                description: item.description,
                            })
                        }
                    >
                        <Card
                            image={item.thumbnail.path}
                            title={item.name}
                            link="/card-informations"
                            // link="/"
                        />
                    </ButtonWrapper>
                );
            })}
        </WrapperContainer>
    );
};

export default CardsWithCardContainer;

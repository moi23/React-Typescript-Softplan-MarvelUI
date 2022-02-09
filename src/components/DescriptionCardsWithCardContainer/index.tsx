import React, { useEffect, useState } from "react";
import api from "../../api";
import DescriptionCard from "./DescriptionCard";

import { ButtonWrapper, WrapperContainer } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { test } from "../../store/Card/Card.actions";

const DescriptionCardsWithCardContainer = () => {
    const [payloadList, setPayloadList] = useState([]);
    const dispatch = useDispatch();

    // busca valor inicial
    const results = useSelector(function (state: any) {
        return state.personalCardInformations;
    });

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        api.get(`/characters/${results.id}/series`)
            .then((response) => {
                setPayloadList(response.data.data.results);
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
            {payloadList.map((item: any, indice: any) => {
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
                        <DescriptionCard
                            image={item.thumbnail.path}
                            title={item.title}
                            link="/sub-card-informations"
                            // link="/"
                        />
                    </ButtonWrapper>
                );
            })}
        </WrapperContainer>
    );
};

export default DescriptionCardsWithCardContainer;

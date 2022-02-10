import React, { useEffect, useState } from "react";
import api from "../../api";

import DescriptionCard from "./DescriptionCard";
import CardSkeletonCollection from "../Skelletons/CardSkeletonCollection";

import { ButtonWrapper, WrapperContainer } from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { test } from "../../store/Card/Card.actions";

const DescriptionCardsWithCardContainer = () => {
    const [requestStatus, setRequestStatus] = useState(true);
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
                setRequestStatus(false);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        dispatch({
            type: "TEST",
            payload: cardList,
        });
    }, []);

    const setGlobalValueChildrenCard = (element: any) => {
        console.log("ELEMENT ID", element.id);
        dispatch({
            type: "SUB_CARD_INFO",
            payload: {
                id: element.id,
            },
        });
    };

    return (
        <WrapperContainer>
            {requestStatus && <CardSkeletonCollection />}
            {payloadList.map((item: any, indice: any) => {
                return (
                    <ButtonWrapper
                        onClick={() =>
                            setGlobalValueChildrenCard({
                                id: item.id,
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

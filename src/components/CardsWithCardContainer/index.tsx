import React, { useEffect, useState } from "react";
import api from "../../api";
import Card from "./Card";

import { ButtonWrapper, WrapperContainer } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { test } from "../../store/Card/Card.actions";
import SkeletonsCollection from "../Skelletons/CardSkeletonCollection";

const CardsWithCardContainer = () => {
    const dispatch = useDispatch();

    // busca valor inicial
    const results = useSelector(function (state: any) {
        return state.card;
    });

    const [cardList, setCardList] = useState([]);
    const [cardSkeletonIsStatus, setCardSkeletonIsStatus] = useState(true);

    useEffect(() => {
        api.get("/characters?limit=100")
            .then((response) => {
                setCardList(response.data.data.results);
                setCardSkeletonIsStatus(false);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        dispatch({
            type: "TEST",
            payload: cardList,
        });
    }, []);

    const inputValueChanged = useSelector(function (state: any) {
        return state.HomeInputText;
    });

    useEffect(() => {
        if (inputValueChanged !== "") {
            (async () => {
                const payload = await api.get(
                    `/characters?name=${inputValueChanged}`
                );
                console.log("PAYLOAD!!!!", payload);
                setCardList(payload.data.data.results);
                console.log("É 1");
            })();
        } else {
            (async () => {
                const payload = await api.get("/characters");
                setCardList(payload.data.data.results);
                console.log("É 0", payload);
            })();
        }
    }, [inputValueChanged]);

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
            {cardSkeletonIsStatus && (
                <>
                    <SkeletonsCollection />
                </>
            )}

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

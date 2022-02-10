import Card from "./Card";
import api from "../../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWrapper, WrapperContainer } from "./styles";
import SkeletonsCollection from "../Skelletons/CardSkeletonCollection";

const CardsWithCardContainer = () => {
    const dispatch = useDispatch();

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
                setCardList(payload.data.data.results);
            })();
        } else {
            (async () => {
                const payload = await api.get("/characters");
                setCardList(payload.data.data.results);
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

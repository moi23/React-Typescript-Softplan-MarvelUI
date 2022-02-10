import { WrapperContainer } from "./styles";
import { Link } from "react-router-dom";

import editImage from "../../assets/images/edit.png";
import arrowCircleImage from "../../assets/images/arrowCircle.png";

import api from "../../api/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageProfileCardSkelleton from "../Skelletons/ImageProfileCardSkelleton";
import TitleCardSkelleton from "../Skelletons/TitleCardSkelleton";
import DescriptionCardSkelleton from "../Skelletons/DescriptionCardSkelleton";

interface IpropsItemDescription {
    btnVoltar: boolean;
    containerTwoButtons: boolean;
}

interface IpropsCardInfo {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const EditInformationsItemDescription = ({
    btnVoltar,
    containerTwoButtons,
}: IpropsItemDescription) => {
    const [cardInfo, setCardInfo] = useState({} as IpropsCardInfo);
    const [requestStatus, setRequestStatus] = useState(true);

    const payload = useSelector(function (state: any) {
        return state.personalCardInformations;
    });

    const { id } = payload;

    let fakeCardInformations = useSelector(function (state: any) {
        return state.testeAA;
    });

    useEffect(() => {
        api.get(`/characters/${id}`)
            .then((response: any) => {
                setCardInfo(response.data.data.results[0]);
                setRequestStatus(false);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <WrapperContainer>
            <div className="left">
                {requestStatus && <ImageProfileCardSkelleton />}
                {!requestStatus && (
                    <img src={`${cardInfo?.thumbnail?.path}.jpg`} />
                )}
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                {requestStatus && <TitleCardSkelleton />}
                {!requestStatus && (
                    <>
                        {fakeCardInformations.inputTitle == "" ? (
                            <h2>{cardInfo.name}</h2>
                        ) : (
                            <h2>{fakeCardInformations.inputTitle}</h2>
                        )}
                    </>
                )}

                {requestStatus && <DescriptionCardSkelleton />}

                {!requestStatus && (
                    <>
                        {fakeCardInformations.inputDescription == "" ? (
                            <p>{cardInfo.description}</p>
                        ) : (
                            <p>{fakeCardInformations.inputDescription}</p>
                        )}
                    </>
                )}

                {btnVoltar && (
                    <Link id="voltarLink" to="/">
                        Voltar
                    </Link>
                )}

                {containerTwoButtons && (
                    <div className="controlButtons">
                        <Link id="editarLinkFirst" to="/edit-informations">
                            <img src={editImage} alt="Botão de Editar" />
                        </Link>
                        <Link id="voltarLinkSecond" to="/">
                            <img src={arrowCircleImage} alt="Botão de Voltar" />
                        </Link>
                    </div>
                )}
            </div>
        </WrapperContainer>
    );
};

export default EditInformationsItemDescription;

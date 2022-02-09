import { WrapperContainer } from "./styles";
import { Link } from "react-router-dom";

import abomination from "../../assets/images/abomination.jpg";
import editImage from "../../assets/images/edit.png";
import arrowCircleImage from "../../assets/images/arrowCircle.png";

import api from "../../api/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const ItemDescription = ({
    btnVoltar,
    containerTwoButtons,
}: IpropsItemDescription) => {
    const [cardInfo, setCardInfo] = useState({} as IpropsCardInfo);

    const payload = useSelector(function (state: any) {
        return state.personalCardInformations;
    });

    const { id } = payload;

    useEffect(() => {
        api.get(`/characters/${id}`)
            .then((response: any) => {
                console.log("responsee: ", response);
                setCardInfo(response.data.data.results[0]);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <WrapperContainer>
            <div className="left">
                <img
                    src={`${cardInfo?.thumbnail?.path}.jpg`}
                    alt="Image Card"
                />
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                <h2>{cardInfo.name}</h2>
                <p>{cardInfo.description}</p>

                {btnVoltar && (
                    <Link id="voltarLink" to="/">
                        Voltar
                    </Link>
                )}

                {containerTwoButtons && (
                    <div className="controlButtons">
                        <button>
                            <img src={editImage} alt="Botão de Editar" />
                        </button>
                        <Link id="voltarLinkSecond" to="/">
                            <img src={arrowCircleImage} alt="Botão de Voltar" />
                        </Link>
                    </div>
                )}
            </div>
        </WrapperContainer>
    );
};

export default ItemDescription;

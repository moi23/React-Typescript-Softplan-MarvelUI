import { WrapperContainer } from "./styles";
import { Link } from "react-router-dom";

import abomination from "../../assets/images/abomination.jpg";
import editImage from "../../assets/images/edit.png";
import arrowCircleImage from "../../assets/images/arrowCircle.png";

import ImageProfileCardSkelleton from "../Skelletons/ImageProfileCardSkelleton";
import TitleCardSkelleton from "../Skelletons/TitleCardSkelleton";
import DescriptionCardSkelleton from "../Skelletons/DescriptionCardSkelleton";

import api from "../../api/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IpropsSubCardItemDescriptionsn {
    btnVoltar: boolean;
    containerTwoButtons: boolean;
}

const SubCardItemDescriptions = ({
    btnVoltar,
    containerTwoButtons,
}: IpropsSubCardItemDescriptionsn) => {
    const [requestStatus, setRequestStatus] = useState(true);
    const [contentInfo, setContentInfo] = useState({} as any);
    const results = useSelector(function (state: any) {
        return state.SubCardInformations;
    });

    useEffect(() => {
        api.get(`series/${results.id}`)
            .then((response) => {
                setContentInfo(response.data.data.results[0]);
                setRequestStatus(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <WrapperContainer>
            <div className="left">
                {requestStatus && <ImageProfileCardSkelleton />}
                {!requestStatus && (
                    <img
                        src={`${contentInfo.thumbnail?.path}.jpg`}
                        alt="Image Card"
                    />
                )}
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                {requestStatus && <TitleCardSkelleton />}
                {!requestStatus && <h2>{contentInfo.title}</h2>}

                {requestStatus && <DescriptionCardSkelleton />}
                {!requestStatus && <p>{contentInfo.description}</p>}

                {!requestStatus && (
                    <>
                        {btnVoltar && (
                            <Link id="voltarLink" to="/">
                                Voltar
                            </Link>
                        )}
                    </>
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

export default SubCardItemDescriptions;

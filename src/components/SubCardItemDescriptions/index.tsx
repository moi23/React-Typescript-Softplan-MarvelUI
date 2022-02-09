import { WrapperContainer } from "./styles";
import { Link } from "react-router-dom";

import abomination from "../../assets/images/abomination.jpg";
import editImage from "../../assets/images/edit.png";
import arrowCircleImage from "../../assets/images/arrowCircle.png";

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
    const results = useSelector(function (state: any) {
        return state.SubCardInformations;
    });

    console.log("PAY PAY", results);

    return (
        <WrapperContainer>
            <div className="left">
                <img src={abomination} alt="Image Card" />
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                <h2>{"abomination"}</h2>
                <p>{"abomination description"}</p>

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

export default SubCardItemDescriptions;

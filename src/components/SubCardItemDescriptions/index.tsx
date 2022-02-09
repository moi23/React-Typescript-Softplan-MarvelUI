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
    const [contentInfo, setContentInfo] = useState({} as any);
    const results = useSelector(function (state: any) {
        return state.SubCardInformations;
    });

    console.log("PAY PAY", results);

    useEffect(() => {
        api.get(`series/${results.id}`)
            .then((response) => {
                console.log("AGORA VAI", response.data.data.results[0]);
                setContentInfo(response.data.data.results[0]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <WrapperContainer>
            <div className="left">
                <img
                    src={`${contentInfo.thumbnail?.path}.jpg`}
                    alt="Image Card"
                />
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                <h2>{contentInfo.title}</h2>
                <p>{contentInfo.description}</p>

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

import { WrapperContainer } from "./styles";
import { Link } from "react-router-dom";

import abomination from "../../assets/images/abomination.jpg";
import editImage from "../../assets/images/edit.png";
import arrowCircleImage from "../../assets/images/arrowCircle.png";

interface IpropsItemDescription {
    btnVoltar: boolean;
    containerTwoButtons: boolean;
}
const ItemDescription = ({
    btnVoltar,
    containerTwoButtons,
}: IpropsItemDescription) => {
    return (
        <WrapperContainer>
            <div className="left">
                <img src={abomination} alt="Image Card" />
            </div>
            <div className={`right ${containerTwoButtons && "dinamycWidth"}`}>
                <h2>Abomination (Emil Blonsky)</h2>
                <p>
                    The Abomination é um personagem fictício que aparece nos
                    quadrinhos americanos publicados pela Marvel Comics. A
                    iteração original e mais conhecida é Emil Blonsky,
                </p>

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

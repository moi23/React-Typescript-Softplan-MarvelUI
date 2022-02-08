import { WrapperContainer } from "./styles";

import { Link } from "react-router-dom";

const Card = () => {
    return (
        <WrapperContainer
            onClick={() => (window.location.href = "card-informations")}
        >
            <div className="wrapperImageContainer" />
            <h2>3-D Man</h2>
            <span>Veja Mais</span>
        </WrapperContainer>
    );
};

export default Card;

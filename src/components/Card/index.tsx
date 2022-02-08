import React from "react";
import { WrapperContainer } from "./styles";
import defaultImage from "../../assets/images/defaultImage.jpg";

const Card = () => {
    return (
        <WrapperContainer>
            <div className="wrapperImageContainer" />
            <h2>3-D Man</h2>
            <span>Veja Mais</span>
        </WrapperContainer>
    );
};

export default Card;

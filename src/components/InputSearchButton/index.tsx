import React from "react";

import { WrapperContainer } from "./styles";

import iconSearch from "../../assets/images/IconSearch.png";

const InputSearchButton = () => {
    return (
        <WrapperContainer>
            <input type="text" placeholder="Pesquisar Herói" />
            <button>
                <img src={iconSearch} alt="" />
            </button>
        </WrapperContainer>
    );
};

export default InputSearchButton;

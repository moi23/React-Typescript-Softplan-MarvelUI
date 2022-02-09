import React from "react";
import { Link } from "react-router-dom";

import { WrapperContainerForm } from "./styles";

const InputTitleAndInputDescription = () => {
    return (
        <WrapperContainerForm>
            <input placeholder="Abomination (Emil Blonsky)" />
            <textarea placeholder="Description Here..." />
            <div className="alignButtons">
                <Link to="/" id="salvar">
                    Salvar e Voltar
                </Link>
                <Link to="/" id="cancelar">
                    Cancelar e Voltar
                </Link>
            </div>
        </WrapperContainerForm>
    );
};

export default InputTitleAndInputDescription;

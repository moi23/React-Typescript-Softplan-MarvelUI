import React from "react";

import { WrapperContainer } from "./styles";
import InputTitleAndInputDescription from "../../components/InputTitleAndInputDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import ItemDescription from "../../components/ItemDescription";

const EditCard = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription
                    btnVoltar={false}
                    containerTwoButtons={false}
                />
                <InputTitleAndInputDescription />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default EditCard;

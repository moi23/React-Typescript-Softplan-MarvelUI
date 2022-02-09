import React from "react";
import ItemDescription from "../../components/ItemDescription";
import SubCardItemDescriptions from "../../components/SubCardItemDescriptions";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";

import { WrapperContainer } from "./styles";

const SubCardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <SubCardItemDescriptions
                    btnVoltar={true}
                    containerTwoButtons={false}
                />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default SubCardInformations;

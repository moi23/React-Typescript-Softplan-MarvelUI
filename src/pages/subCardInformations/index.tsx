import React from "react";
import ItemDescription from "../../components/ItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";

import { WrapperContainer } from "./styles";

const SubCardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription btnVoltar={true} containerTwoButtons={false} />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default SubCardInformations;

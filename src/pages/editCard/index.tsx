import React from "react";

import { WrapperContainer } from "./styles";
import InputTitleAndInputDescription from "../../components/InputTitleAndInputDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import ItemDescription from "../../components/ItemDescription";

import api from "../../api";

import { useDispatch, useSelector } from "react-redux";
import { CardInfo } from "../../store/PersonalCardInformations/PersonalCardInformations.actions";

const EditCard = () => {
    const cardInfo = useSelector(function (state: any) {
        return state.personalCardInformations;
    });

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

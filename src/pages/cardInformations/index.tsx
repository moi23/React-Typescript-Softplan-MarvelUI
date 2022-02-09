import DescriptionCardsWithCardContainer from "../../components/DescriptionCardsWithCardContainer";
import ItemDescription from "../../components/ItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";

import { WrapperContainer } from "./styles";

// import { CardInfo } from "../../store/PersonalCardInformations/PersonalCardInformations.actions";

const CardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription
                    btnVoltar={false}
                    containerTwoButtons={false}
                />
                <DescriptionCardsWithCardContainer />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default CardInformations;

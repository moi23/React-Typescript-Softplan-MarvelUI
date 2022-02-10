import DescriptionCardsWithCardContainer from "../../components/DescriptionCardsWithCardContainer";
import ItemDescription from "../../components/ItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";

import { WrapperContainer } from "./styles";

const CardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription btnVoltar={false} containerTwoButtons={true} />
                <DescriptionCardsWithCardContainer />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default CardInformations;

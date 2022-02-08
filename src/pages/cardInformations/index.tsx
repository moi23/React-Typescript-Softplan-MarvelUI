import ItemDescription from "../../components/ItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";

import { WrapperContainer } from "./styles";

const CardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription btnVoltar={true} containerTwoButtons={true} />
            </WhiteBoxContainer>
        </WrapperContainer>
    );
};

export default CardInformations;

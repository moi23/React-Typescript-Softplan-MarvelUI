import { WrapperContainer } from "./styles";
import ItemDescription from "../../components/ItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import DescriptionCardsWithCardContainer from "../../components/DescriptionCardsWithCardContainer";
import StarfieldAnimation from "react-starfield-animation";

const CardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <ItemDescription btnVoltar={false} containerTwoButtons={true} />
                <DescriptionCardsWithCardContainer />
            </WhiteBoxContainer>
            <StarfieldAnimation
                id="teste"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                }}
            />
        </WrapperContainer>
    );
};

export default CardInformations;

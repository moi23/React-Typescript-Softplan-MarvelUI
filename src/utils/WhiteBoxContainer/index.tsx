import {
    WrapperContainer,
    HeaderContainer,
    ImageHeader,
    BodyContainer,
} from "./styles";
import logoSoftPlan from "../../assets/images/reactMarvelSoftplan.png";

const WhiteBoxContainer = () => {
    return (
        <WrapperContainer>
            <HeaderContainer>
                <ImageHeader src={logoSoftPlan} />
            </HeaderContainer>
            <BodyContainer></BodyContainer>
        </WrapperContainer>
    );
};

export default WhiteBoxContainer;

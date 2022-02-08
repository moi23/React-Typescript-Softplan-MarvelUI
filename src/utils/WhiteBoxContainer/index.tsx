import { WrapperContainer, HeaderContainer, ImageHeader } from "./styles";
import logoSoftPlan from "../../assets/images/reactMarvelSoftplan.png";

const WhiteBoxContainer = () => {
    return (
        <WrapperContainer>
            <HeaderContainer>
                <ImageHeader src={logoSoftPlan} />
            </HeaderContainer>
        </WrapperContainer>
    );
};

export default WhiteBoxContainer;

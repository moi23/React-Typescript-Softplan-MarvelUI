import {
    WrapperContainer,
    HeaderContainer,
    ImageHeader,
    BodyContainer,
} from "./styles";
import logoSoftPlan from "../../assets/images/reactMarvelSoftplan.png";

interface IpropsWhiteBoxContainer {
    children: Element;
}

const WhiteBoxContainer = (props: any) => {
    return (
        <WrapperContainer>
            <HeaderContainer>
                <ImageHeader src={logoSoftPlan} />
            </HeaderContainer>
            <BodyContainer>{props.children}</BodyContainer>
        </WrapperContainer>
    );
};

export default WhiteBoxContainer;

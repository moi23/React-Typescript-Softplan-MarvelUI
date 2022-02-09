import {
    WrapperContainer,
    HeaderContainer,
    ImageHeader,
    BodyContainer,
} from "./styles";
import logoSoftPlan from "../../assets/images/reactMarvelSoftplan.png";
import { Link } from "react-router-dom";

interface IpropsWhiteBoxContainer {
    children: Element;
}

const WhiteBoxContainer = (props: any) => {
    return (
        <WrapperContainer>
            <HeaderContainer>
                <Link to="/">
                    <ImageHeader src={logoSoftPlan} />
                </Link>
            </HeaderContainer>
            <BodyContainer>{props.children}</BodyContainer>
        </WrapperContainer>
    );
};

export default WhiteBoxContainer;

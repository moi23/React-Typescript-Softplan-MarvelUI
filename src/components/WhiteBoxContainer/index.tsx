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
            <HeaderContainer className="animate__animated animate__fadeIn animate__delay-1s">
                <Link to="/">
                    <ImageHeader src={logoSoftPlan} />
                </Link>
            </HeaderContainer>
            <BodyContainer className="animate__animated animate__fadeIn">
                {props.children}
            </BodyContainer>
        </WrapperContainer>
    );
};

export default WhiteBoxContainer;

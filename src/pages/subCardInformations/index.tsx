import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import SubCardItemDescriptions from "../../components/SubCardItemDescriptions";
import StarfieldAnimation from "react-starfield-animation";

import { WrapperContainer } from "./styles";

const SubCardInformations = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <SubCardItemDescriptions
                    btnVoltar={true}
                    containerTwoButtons={false}
                />
            </WhiteBoxContainer>
            <StarfieldAnimation
                id="teste"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100vh",
                    top: 0,
                }}
            />
        </WrapperContainer>
    );
};

export default SubCardInformations;

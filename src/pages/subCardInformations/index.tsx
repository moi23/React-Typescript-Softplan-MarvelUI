import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import SubCardItemDescriptions from "../../components/SubCardItemDescriptions";

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
        </WrapperContainer>
    );
};

export default SubCardInformations;

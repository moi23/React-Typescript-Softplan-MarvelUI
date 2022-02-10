import { WrapperContainer } from "./styles";
// import ItemDescription from "../../components/ItemDescription";
import EditInformationsItemDescription from "../../components/EditInformationsItemDescription";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import InputTitleAndInputDescription from "../../components/InputTitleAndInputDescription";
import StarfieldAnimation from "react-starfield-animation";

const EditCard = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <EditInformationsItemDescription
                    btnVoltar={false}
                    containerTwoButtons={false}
                />
                <InputTitleAndInputDescription />
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

export default EditCard;

import { WrapperContainer } from "./styles";
import WhiteBoxContainer from "../../components/WhiteBoxContainer";
import InputSearchButton from "../../components/InputSearchButton";
import CardsWithCardContainer from "../../components/CardsWithCardContainer";
import StarfieldAnimation from "react-starfield-animation";

const Home = () => {
    return (
        <WrapperContainer>
            <WhiteBoxContainer>
                <InputSearchButton />
                <CardsWithCardContainer />
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

export default Home;

import { WrapperContainer, Wrapper } from "./styles";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/defaultImage.jpg";

interface ICardProps {
    title: string;
    link: string;
    image: string;
}

const Card = ({ title, link = "/", image = defaultImage }: ICardProps) => {
    return (
        <Wrapper>
            <Link to={link}>
                <img src={`${image}.jpg`} alt="" />
                <div id="alignTitle">
                    <h4>{title}</h4>
                </div>
                <span>Veja Mais</span>
            </Link>
        </Wrapper>
    );
};

export default Card;

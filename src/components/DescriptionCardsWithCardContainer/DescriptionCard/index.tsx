import { WrapperContainer, Wrapper } from "./styles";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/defaultImage.jpg";

interface IDescriptionCardProps {
    title: string;
    link: string;
    image: string;
}

const DescriptionCard = ({
    title,
    link = "/",
    image = defaultImage,
}: IDescriptionCardProps) => {
    return (
        <Wrapper>
            <Link to={link}>
                <img src={`${image}.jpg`} alt="" />
                <div id="alignTitle">
                    <h5>{title}</h5>
                </div>
                <span>SEE MORE.</span>
            </Link>
        </Wrapper>
    );
};

export default DescriptionCard;

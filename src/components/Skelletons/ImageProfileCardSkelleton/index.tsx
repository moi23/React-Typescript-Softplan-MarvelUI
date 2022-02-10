import React from "react";

import { WrapperContainer } from "./styles";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageProfileCardSkelleton = () => {
    return (
        <WrapperContainer>
            <Skeleton className="SkelletonImg" />
        </WrapperContainer>
    );
};

export default ImageProfileCardSkelleton;

import React from "react";

import { WrapperContainer } from "./styles";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TitleCardSkelleton = () => {
    return (
        <WrapperContainer>
            <Skeleton className="SkelletonTitle" />
        </WrapperContainer>
    );
};

export default TitleCardSkelleton;

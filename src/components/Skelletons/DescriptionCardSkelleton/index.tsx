import React from "react";

import { WrapperContainer } from "./styles";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DescriptionCardSkelleton = () => {
    return (
        <WrapperContainer>
            <Skeleton className="SkelletonDescription" />
        </WrapperContainer>
    );
};

export default DescriptionCardSkelleton;

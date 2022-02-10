import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { WrapperContainer } from "./styles";

const CardSkeletonCollection = () => {
    return (
        <WrapperContainer>
            <Skeleton className="Skelletons" />
            <Skeleton className="Skelletons" />
            <Skeleton className="Skelletons" />
        </WrapperContainer>
    );
};

export default CardSkeletonCollection;

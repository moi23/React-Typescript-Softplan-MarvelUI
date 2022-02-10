import React from "react";
import { useSelector } from "react-redux";
import StarfieldAnimation from "react-starfield-animation";

import { WrapperContainer } from "./styles";

const Loader = () => {
    let statusLoader = useSelector((state) => {
        // return state.SubCardInformationsReducer;
    });
    return (
        <>
            <WrapperContainer>
                <h2>Loading</h2>
                <StarfieldAnimation
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </WrapperContainer>
        </>
    );
};

export default Loader;

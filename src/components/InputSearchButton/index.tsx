import React, { useRef } from "react";

import { WrapperContainer } from "./styles";
import iconSearch from "../../assets/images/IconSearch.png";

import { useDispatch, useSelector } from "react-redux";

// interface IpropsHandleInputHero {
//     current: {
//         value: string;
//     };
// }

const InputSearchButton = () => {
    const dispatch = useDispatch();

    const inputHeroSearch = useRef(null);

    const handleInputHero = () => {
        const inputValue = inputHeroSearch.current as any;
        console.log(inputValue.value, typeof inputValue.value);
        return inputValue.value;
    };

    const handleSearchInput = (event: any) => {
        event.preventDefault();
        const inputValue = handleInputHero();

        dispatch({
            type: "HOME_INPUT_TEXT",
            payload: inputValue,
        });
    };

    return (
        <WrapperContainer>
            <input
                type="text"
                placeholder="Pesquisar Herói"
                ref={inputHeroSearch}
                onChange={handleInputHero}
            />
            <button onClick={handleSearchInput}>
                <img src={iconSearch} alt="" />
            </button>
        </WrapperContainer>
    );
};

export default InputSearchButton;

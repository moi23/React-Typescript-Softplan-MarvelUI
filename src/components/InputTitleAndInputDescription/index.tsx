import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WrapperContainerForm } from "./styles";

const InputTitleAndInputDescription = () => {
    const dispatch = useDispatch();

    const inputTitleRef = useRef(null as any);
    const inputDescriptionRef = useRef(null as any);

    const handleInpuTextValue = () => {
        const payload = {
            inputTitle: inputTitleRef.current.value,
            inputDescription: inputDescriptionRef.current.value,
        };

        dispatch({
            type: "EDIT_INFORMATIONS_TITLE_AND_DESCRIPTION",
            payload,
        });
    };

    let results = useSelector(function (state: any) {
        return state.testeAA;
    });

    console.log("results", results.inputTitle);

    return (
        <WrapperContainerForm>
            <input
                placeholder="Type the card title here..."
                ref={inputTitleRef}
                onChange={handleInpuTextValue}
            />
            <textarea
                placeholder="Description Here..."
                ref={inputDescriptionRef}
                onChange={handleInpuTextValue}
            />
            <div className="alignButtons">
                <Link to="/" id="salvar">
                    Save and Exit
                </Link>
                <Link to="/" id="cancelar">
                    Cancel and Exit
                </Link>
            </div>
        </WrapperContainerForm>
    );
};

export default InputTitleAndInputDescription;

import { createStore, combineReducers } from "redux";

import cardReducer from "./Card/Card.reducer";
import personalCardInformationsReducer from "./PersonalCardInformations/PersonalCardInformations.reducer";
import SubCardInformationsReducer from "./SubCardInformations/SubCardInformations.reducer";
import EditInformations from "./EditInformations/EditInformations.reducer";
import HomeInputText from "./HomeInputText/HomeInputText.reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    personalCardInformations: personalCardInformationsReducer,
    SubCardInformations: SubCardInformationsReducer,
    EditInformations: EditInformations,
    HomeInputText: HomeInputText,
});

const store = createStore(rootReducer);

export default store;

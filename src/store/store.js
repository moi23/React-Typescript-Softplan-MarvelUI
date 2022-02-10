import { createStore, combineReducers } from "redux";

import cardReducer from "./Card/Card.reducer";
import StatusLoader from "./StatusLoader/StatusLoader.reducer";
import HomeInputText from "./HomeInputText/HomeInputText.reducer";
import EditInformations from "./EditInformations/EditInformations.reducer";
import SubCardInformationsReducer from "./SubCardInformations/SubCardInformations.reducer";
import personalCardInformationsReducer from "./PersonalCardInformations/PersonalCardInformations.reducer";
import testeAAReducer from "./EditInformationsTitleAndDescription/EditInformationsTitleAndDescription.reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    StatusLoader: StatusLoader,
    HomeInputText: HomeInputText,
    EditInformations: EditInformations,
    personalCardInformations: personalCardInformationsReducer,
    SubCardInformations: SubCardInformationsReducer,
    testeAA: testeAAReducer,
});

const store = createStore(rootReducer);

export default store;

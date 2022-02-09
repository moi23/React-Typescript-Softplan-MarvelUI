import { createStore, combineReducers } from "redux";

import cardReducer from "./Card/Card.reducer";
import personalCardInformationsReducer from "./PersonalCardInformations/PersonalCardInformations.reducer";
import SubCardInformationsReducer from "./SubCardInformations/SubCardInformations.reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    personalCardInformations: personalCardInformationsReducer,
    SubCardInformations: SubCardInformationsReducer,
});

const store = createStore(rootReducer);

export default store;

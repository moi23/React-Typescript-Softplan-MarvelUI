import { createStore, combineReducers } from "redux";

import cardReducer from "./Card/Card.reducer";
import personalCardInformationsReducer from "./PersonalCardInformations/PersonalCardInformations.reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    personalCardInformations: personalCardInformationsReducer,
});

const store = createStore(rootReducer);

export default store;

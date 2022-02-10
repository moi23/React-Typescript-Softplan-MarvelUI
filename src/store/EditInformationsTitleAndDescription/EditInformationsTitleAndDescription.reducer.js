export default function (state = {}, action) {
    switch (action.type) {
        case "EDIT_INFORMATIONS_TITLE_AND_DESCRIPTION":
            return action.payload;

        default:
            return state;
    }
}

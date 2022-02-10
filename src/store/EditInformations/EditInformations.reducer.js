export default function (state = {}, action) {
    switch (action.type) {
        case "EDIT_INFORMATIONS":
            return action.payload;

        default:
            return state;
    }
}

export default function (state = "", action) {
    switch (action.type) {
        case "HOME_INPUT_TEXT":
            return action.payload;

        default:
            return state;
    }
}

export default function (state = 42, action) {
    switch (action.type) {
        case "SUB_CARD_INFO":
            return action.payload;

        default:
            return state;
    }
}

export default function (
    state = {
        id: 0,
        name: "",
        description: "",
        thumbnail: "",
    },
    action
) {
    switch (action.type) {
        case "CARD_INFO":
            return action.payload;
        default:
            return state;
    }
}

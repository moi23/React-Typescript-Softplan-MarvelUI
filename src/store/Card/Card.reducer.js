export default function (state = [1], action) {
    switch (action.type) {
        case "TEST":
            return action.payload;

        default:
            return state;
    }
}

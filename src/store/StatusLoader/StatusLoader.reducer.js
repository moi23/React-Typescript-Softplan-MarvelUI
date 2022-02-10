export default function (state = false, action) {
    switch (action.type) {
        case "STATUS_LOADER":
            return action.payload;

        default:
            return state;
    }
}

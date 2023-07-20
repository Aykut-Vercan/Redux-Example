import { createStore } from "redux";

export const generateId = () => Math.floor(Math.random() * 95) + 1;

const initialState = {
    comments: [
        {
            id: generateId(),
            body: "Baygınlık geldi"
        },
        {
            id: generateId(),
            body: "Harikulade"
        },
        {
            id: generateId(),
            body: "Büyük zaman kaybı"
        }
    ]
}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                ...state,
                comments: [action.payload, ...state.comments]
            };
        default:
            return state;
    }
}

export default createStore(commentReducer);
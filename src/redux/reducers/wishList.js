import {TOGGLE_ITEM_IN_WISH_LIST} from "../action-types";

const initialState = {
    wishList: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_WISH_LIST: {
            const updatedWishList = state.wishList.filter(value => value.id !== action.payload.id);

            if (updatedWishList.length === state.wishList.length) {
                updatedWishList.push(action.payload)
            }

            return {...state, wishList: updatedWishList};
        }
        default: {
            return state
        }
    }
}
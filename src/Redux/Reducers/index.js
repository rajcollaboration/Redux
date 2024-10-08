import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const mergeReducers = combineReducers({
    data : dataReducer
})
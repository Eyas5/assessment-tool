import { combineReducers } from "redux";
import { LOG_IN, LOG_OUT, USER_IN, RESET_STATE} from "./actions";

const user = (state ={} , { type, payload}) => {
	switch (type) {
	case LOG_IN:
		return payload;
	case LOG_OUT:
		state = null;
		state={};
		return state;
	case RESET_STATE:
		state = null;
		return payload;
	default:
		return state;
	}
};

const usersfromapi = (state ={} , { type, payload}) => {
	switch (type) {
	case USER_IN:
		return payload;
	default:
		return state;
	}
};

export default combineReducers({ authuser: user , users: usersfromapi});

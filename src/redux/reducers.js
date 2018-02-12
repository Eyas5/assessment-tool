import { combineReducers } from 'redux';
import { LOG_IN, LOG_OUT,SORT_CLASSES } from './actions';

const initialState ={
	classInfo:Object.values({
		"001": {
			"id": "001",
			"name": "Spring 2018",
			"participantCount": "10",
			"currentSprint": "12",
			"headTeacher": "T001",
			"graduationDate": "2018-04-01",
			"plannedSprints": "20"
		  },
		  "002": {
			"id": "002",
			"name": "Summer 2018",
			"participantCount": "12",
			"currentSprint": "0",
			"headTeacher": "T002",
			"graduationDate": "2018-06-01",
			"plannedSprints": "20"
		  }
	})
  }
const user = (state = {}, { type, payload }) => {
	switch (type) {
		case LOG_IN:
			return { ...payload };
		case LOG_OUT:
			return {};
		default:
			return state;
	}
};

const userClass = (state = initialState,{type,classes})=>{
	switch (type) {
		case SORT_CLASSES:
			return { ...state, classInfo:classes};
		default:
			return state;
	}
}

export default combineReducers({ user, userClass});

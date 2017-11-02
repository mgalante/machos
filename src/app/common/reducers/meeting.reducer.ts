import * as MeetingActions from '../actions/meeting.actions';
import { Meeting } from '../models/meeting';

type Action = MeetingActions.All;

export function meetingReducer(state: Meeting[] = [],
	action: Action) {

	switch (action.type) {
		case MeetingActions.ADD_MEETING:
			return [...state, action.payload];

		case MeetingActions.EDIT_MEETING:
			return state.map((item: Meeting) => {
				if (item.id === action.payload.id) {
					return { ...item, ...action.payload };
				}
				return item;
			});
	}
	return state;
}

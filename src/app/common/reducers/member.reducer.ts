import * as MemberActions from '../actions/member.actions';
import { Member } from '../models/member';

type Action = MemberActions.All;

export function memberReducer(state: Member[] = [],
	action: Action) {

	switch (action.type) {
		case MemberActions.ADD_MEMBER:
			return [...state, action.payload];

		case MemberActions.EDIT_MEMBER:
			return state.map((item: Member) => {
				if (item.id === action.payload.id) {
					return { ...item, ...action.payload };
				}
				return item;
			});
	}
	return state;
}

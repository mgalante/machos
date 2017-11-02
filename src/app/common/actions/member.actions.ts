import { Action } from '@ngrx/store';
import { Member } from '../models/member';

export const ADD_MEMBER = '[Member] Add';
export const EDIT_MEMBER = '[Member] Edit';

export class AddMember implements Action {
	readonly type: string = ADD_MEMBER;
	constructor(public payload: Member) { }
}

export class EditMember implements Action {
	readonly type: string = EDIT_MEMBER;
	constructor(public payload: Member) { }
}

export type All = EditMember | AddMember;

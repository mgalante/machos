import { Action } from '@ngrx/store';
import { Meeting } from '../models/meeting';

export const ADD_MEETING = '[Meeting] Add';
export const EDIT_MEETING = '[Meeting] Edit';

export class AddMeeting implements Action {
	readonly type: string = ADD_MEETING;
	constructor(public payload: Meeting) { }
}

export class EditMeeting implements Action {
	readonly type: string = EDIT_MEETING;
	constructor(public payload: Meeting) { }
}

export type All = EditMeeting | AddMeeting;

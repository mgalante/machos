import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { meetingReducer } from './common/reducers/meeting.reducer';
import { memberReducer } from './common/reducers/member.reducer';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRouter,
		StoreModule.forRoot({
			meetings: meetingReducer,
			members: memberReducer
		}),
		StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

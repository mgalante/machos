import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminRouter } from './admin.router';

@NgModule({
	imports: [
		CommonModule,
		AdminRouter
	],
	declarations: [MeetingListComponent, AdminPanelComponent]
})
export class AdminModule { }

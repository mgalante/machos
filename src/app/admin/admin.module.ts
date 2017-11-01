import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MeetingListComponent, AdminPanelComponent]
})
export class AdminModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
	{
		path: '', component: AdminPanelComponent
	}
];

export const AdminRouter: ModuleWithProviders = RouterModule.forChild(routes);

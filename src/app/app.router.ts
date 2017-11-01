import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'admin', pathMatch: 'full' },
	{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

export const AppRouter = RouterModule.forRoot(routes, { useHash: true });
